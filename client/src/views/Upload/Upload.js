import React from 'react'
import './Upload.css';
import  Model  from 'react-modal';
import axios from 'axios';
import { useState } from 'react';
function Upload() {
  const [visibleyoutube, setVisibleyoutube] = useState(false);
  const [visiblespotify, setVisiblespotify] = useState(false);
  const [visiblerss, setVisiblerss] = useState(false);

  return (
<div className='flex'>
<div className='sidebar'></div>

    <div className='flex flex-wrap'>
      <div className='upload-card shadow-lg m-6 ' onClick={ ()=>{ setVisibleyoutube(true)}}>
      <div> <img className='img-u-icon' src='https://avatars.githubusercontent.com/u/4052902?s=200&v=4' /> </div>
      <div> 
        Upload <br/>
        Youtube Video
      </div>
      </div>

      <div className='upload-card shadow-lg m-6' onClick={ ()=>{ setVisiblespotify(true)}} >
      <div> <img className='img-u-icon' src='https://play-lh.googleusercontent.com/ifCatuvGN6UAItrq2ApI0zFm7G1IOciP9jmQ_RXT7GReVVbpK0FEuZSy8sUecdw7hG0' alt='you' /> </div>
      <div> 
        Upload <br/>
        Spotify Podcast
      </div>
      </div>

      <div className='upload-card shadow-lg m-6'onClick={ ()=>{ setVisiblerss(true)}}>
      <div> <img className='img-u-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToA8jNHtcqTjcM1NGZIlUWiPh6M3JWgVgeuA&usqp=CAU' /> </div>
      <div> 
        Upload <br/>
        RSS  Feed
      </div>
      </div>

      <Model isOpen={visibleyoutube} className='popup height' onRequestClose={()=>{ setVisibleyoutube(false)}}
      style={{overlay:{
        backgroundColor:" #21193534"
      }}}
      >
        <span className='popup-heding flex'><img className='img-u-icon' src='https://avatars.githubusercontent.com/u/4052902?s=200&v=4' />  Upload From Youtube</span>
        <br/>
        Name
        <input className='input-table'
         type='text' 
         placeholder='Enter project Name ' 
         />
         Link
        <input className='input-table'
         type='text' 
         placeholder='Enter project Link '
         />

        <br/><br/><br/>
       <p className='text-right'>
       <button className='ms-6 text-red-500' onClick={ ()=>{ setVisibleyoutube(false)}}>Cancle</button>
        <button className='ms-6 btn-create' >Create</button>
       </p>
       </Model>

       <Model isOpen={visiblespotify} className='popup height' onRequestClose={()=>{ setVisiblespotify(false)}}
      style={{overlay:{
        backgroundColor:" #21193534"
      }}}
      >
        <span className='popup-heding flex'><img className='img-u-icon' src='https://play-lh.googleusercontent.com/ifCatuvGN6UAItrq2ApI0zFm7G1IOciP9jmQ_RXT7GReVVbpK0FEuZSy8sUecdw7hG0' alt='you' />  Upload From Youtube</span>
        <br/>
        Name
        <input className='input-table'
         type='text' 
         placeholder='Enter project Name ' 
         />
         Link
        <input className='input-table'
         type='text' 
         placeholder='Enter project Link '
         />

        <br/><br/><br/>
       <p className='text-right'>
       <button className='ms-6 text-red-500' onClick={ ()=>{ setVisiblerss(false)}}>Cancle</button>
        <button className='ms-6 btn-create' >Create</button>
       </p>
       </Model>

       <Model isOpen={visiblerss} className='popup height' onRequestClose={()=>{ setVisiblerss(false)}}
      style={{overlay:{
        backgroundColor:" #21193534"
      }}}
      >
        <span className='popup-heding flex'><img className='img-u-icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToA8jNHtcqTjcM1NGZIlUWiPh6M3JWgVgeuA&usqp=CAU' />  Upload From Youtube</span>
        <br/>
        Name
        <input className='input-table'
         type='text' 
         placeholder='Enter project Name ' 
         />
         Link
        <input className='input-table'
         type='text' 
         placeholder='Enter project Link '
         />

        <br/><br/><br/>
       <p className='text-right'>
       <button className='ms-6 text-red-500' onClick={ ()=>{ setVisiblerss(false)}}>Cancle</button>
        <button className='ms-6 btn-create' >Create</button>
       </p>
       </Model>

    </div>
    </div>
  )
}

export default Upload
