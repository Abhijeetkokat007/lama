import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './AllProject.css';

function AllProject() {
    const [allproject, setAllproject] = useState([])
    const loadData = async () => {
        const response = await axios.get("/api/all/project")
        setAllproject(response?.data?.data)
        console.log(response?.data?.data)
    }

    useEffect(() => {
        loadData() 
    }, [])
  return (
  <>
   <h1 className='project-name m-5'>LAMA</h1>
   <p className='ms-6 back-btn' onClick={ ()=>{window.location.href = "/" }}> 🏠 Back to home</p>
    <span className='colour-purple ms-6'>project</span>
    <p className='text-center text-right m-6'>
    <button className='btn-creat ' onClick={ ()=>{window.location.href = "/" }}><span className='plus-icon'>➕</span> Create New Project </button>
      
    </p>

    <div className='flex flex-wrap justify-evenly'>  
      {
        allproject?.map((project, i) =>{
         const{_id, projectname, updatedAt} = project;
         const date = new Date(updatedAt).toLocaleDateString();
         const time = new Date(updatedAt).toLocaleTimeString();
         return(
            <div className='project-card flex items-center shadow-md' onClick={  ()=>{window.location.href = `/upload/${_id}` }  }> 
                <div className='logo-project'>sp </div>

                <div> 
                <h1 className='project-name'>{projectname}</h1>
                <span className='text-sm '>4 Episode</span> <br/> <br/>
                <p className=' text-sm text-slate-400'>Last edited on {date} at {time} </p>
                </div>
               
                 </div>
         )
        })
      }
    </div>
    </>
  )
}

export default AllProject
