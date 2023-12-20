import React, { useEffect } from 'react'
import './Home.css';
import homeimg from './../../images/image.svg'
import  Model  from 'react-modal';
import axios from 'axios';
import { useState } from 'react';
// import PopupHome from './src/component/PopupHome';

function Home() {
  const [visible, setVisible] = useState(false)
  const [signup, setSignup] = useState(true)
  const [projectname, setProjectname] = useState()

  const loaddata = async () => {

    if(!projectname){
      alert('project name  is required')
    }
    const data = {
      projectname : projectname
    }
  const response = await axios.post("/api/addprojrct" , data )
   if(response?.data?.success){
 setVisible(false)
}

    alert(response?.data?.message)
    setProjectname('')
   

  }

//   useEffect(() => {
// loaddata()
//   }, [])
  return (
    <>
      <h1 className='project-name m-5'>LAMA</h1>
    <h1 className='colour-purple '>
      Create a New Project
    </h1>

    <div className='text-center  pt-8'>
    <img src={homeimg} alt='home img ' className='img-home ' />
    </div>
    <p className='home-text'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
     labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    </p>

    <p className='text-center'>
    <button className='btn-creat' onClick={ ()=>{ setVisible(true)}}><span className='plus-icon'>➕</span> Create New Project </button>
   
    </p>

    <div>
      {/* <button onClick={ ()=>{ setVisible(true)}}> open model ghh </button> */}
      <Model isOpen={visible} className='popup' onRequestClose={()=>{ setVisible(false)}}
      style={{overlay:{
        backgroundColor:" #21193534"
      }}}
      >
        <h1 className='popup-heding'> Create Project</h1>
        <br/>

        <input className='input-table'
         type='text' 
         placeholder='Enter project Name ' 
         value={projectname}
         onChange={(e)=>{
          setProjectname(e.target.value)
         }}
         />
{projectname}
        <br/><br/><br/>
       <p className='text-right'>
       <button className='ms-6 text-red-500' onClick={ ()=>{ setVisible(false)}}>Cancle</button>
        <button className='ms-6 btn-create' onClick={ loaddata}>Create</button>
       </p>
       </Model>

      
     
    </div>
 
    </>
  )
}

export default Home
