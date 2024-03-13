import React, { useReducer } from 'react'
import Video from './components/Video'
import data from "./data/data"
import Playbutton from './components/Playbutton'
import Counter from './components/Counter'
import { useState } from 'react'
import AddVideo from './components/AddVideo'
import VideoList from './components/VideoList'


function App() {

const [editableVideos,seteditableVideos ] = useState(null)


  // reducer ek esa function hota hai jiska return ho state

  function videoReducer(videos,action){
    switch(action.type){
      case "ADD":
        return [
          ...videos,
          {...action.payload, id: videos.length + 1}
        ]

      case "Delete":
        return videos.filter((video) => video.id !== action.payload)

        case "update":
          const index =  (videos.findIndex((v) => v.id === action.payload.id))

          const newVideos = [...videos]
          
          newVideos.splice(index,1,action.payload)

          seteditableVideos(null)
        return newVideos

        default:
          return videos
    }
  }


const [videos, dispatch] = useReducer(videoReducer,data)

// const [videos, setVideos] = useState(data)




// function addVideos(video){
//   // action: {type:"ADD",payload:video}
//   dispatch({type:"ADD",payload:video})
// }


// function deleteVideo(id){
// dispatch({type:"Delete",payload:id})

// }


function editVideo(id){
  seteditableVideos(videos.find((video) => video.id === id))

  }


  return (
    <>


     <div>


     <div className='w-full h-48 flex justify-center items-center gap-5'>


<AddVideo  dispatch={dispatch} editableVideos={editableVideos}

/>

</div>



<div>

 <VideoList videos={videos} dispatch={dispatch} editVideo={editVideo}/>

</div>


     </div>

    </>

  )
}

export default App
