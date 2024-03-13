import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

let initialState = {
    channel:"Apna college",
    time:"6 jan",
    verified : true,
    title:"",
    views:""
}

function AddVideo({dispatch,editableVideos}) {

    const [video, setVideo] = useState(initialState)





    function handleSubmit(e){
        e.preventDefault()
 if (editableVideos) {
  dispatch({type:"update",payload:video})
 }else{
  dispatch({type:"ADD",payload:video})

 }
     
        setVideo(initialState)
    }


    function  handleChange(e){
      setVideo({...video,
         [ e.target.name]:e.target.value
      })
          }


    useEffect(() => {
      if (editableVideos) {
        setVideo(editableVideos)
      }

    },[editableVideos])



  return (
    <div>
      <form className='border-2 p-5   border-gray-600 text-center rounded-xl shadow-lg'>

        <label htmlFor="title">Enter your title : </label>
        <input 
        className='border-2 border-black text-center rounded-lg mt-2'
        type="text" 
        placeholder='enter your title' id='title'
        onChange={handleChange}
        name='title'
        value={video.title} />
      
<br />

       < label htmlFor="views">Enter your views : </label>
        <input
        id='views'
        className='border-2 border-black text-center rounded-lg mt-2'
        type="text" 
        placeholder='enter your views'
        onChange={handleChange} 
        name='views'
        value={video.views} />
  

<br />

 <button 
 onClick={handleSubmit}

   className='px-2 border-2 rounded-lg border-black font-semibold hover:bg-gray-500 hover:text-white mt-4 shadow-lg'
>{editableVideos ? "Edit" : "Add video"}</button>

      </form>
    </div>
  )
}

export default AddVideo
