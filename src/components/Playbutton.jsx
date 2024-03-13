import React from 'react'
import { useState } from 'react';

function Playbutton({name,message,childern,onClick,onPlay,onPause}) {


let [playing, setplaying] = useState(false)

function handleClick(){

   if (playing) {
    onPause()
   }
   else{
    onPlay()
   }

   setplaying(!playing)
        }


  return (
    <div>
      <button
      className='px-2 border-2 rounded-lg border-black font-semibold hover:bg-gray-500 hover:text-white'

      onClick={handleClick}>{(playing)? "Pause ⏸️":"Play ▶️"}</button>
    </div>
  )
}

export default Playbutton
