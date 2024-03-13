import React from 'react'
import Video from './Video'

function VideoList({videos,dispatch,editVideo}) {
  return (
    <div className='w-full h-screen flex flex-wrap justify-around  bg-slate-700 pt-8 shadow-lg'>
 

{videos.map( (item,index) => ( <Video
key={item.id}
id = {item.id}
 channel={item.channel}  
 title={item.title}
 views={item.views}
 time={item.time}
 verified = {item.verified}

editVideo = {editVideo}
dispatch={dispatch}
 />
 ))}


    </div>
  )
}

export default VideoList
