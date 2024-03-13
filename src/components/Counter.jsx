import React from 'react'
import { useState } from 'react'

function Counter() {

    let [number,setnumber] = useState(6)


    function incValue(){

        setnumber(number + 1)

        // setnumber(number + 1)
        // setnumber(number + 1)
        // setnumber(number + 1)
        // setnumber(number + 1)

        setnumber((number) => number + 1) // Updator function 
        setnumber((number) => number + 1)
        setnumber((number) => number + 1)
        setnumber((number) => number + 1)

console.log(number);
    }

    function decValue(){
        if (number == 0) return
        else {
            setnumber(number - 1)
        }
    }

    function reset(){
      setnumber(number = 0)
    }

  return (
    <div className='border-2 inline-block p-10 rounded-lg border-black'>

      <div className='text-center border-2 p-5 rounded-lg border-gray-500'>Counter : {number}</div>

<div className='flex gap-6 mt-5'>

    <button 
    onClick={incValue}
    className='px-3 border-2 rounded-xl border-black font-semibold hover:bg-gray-500 hover:text-white hover:border-black'>increment : {number}</button>

    <button
    onClick={decValue}
    className='px-3 border-2 rounded-xl border-black font-semibold hover:bg-gray-500 hover:text-white hover:border-black '
    >decrement : {number}</button>
    </div>

    
    <div className='text-center mt-5'>
      <button
      onClick={reset}
      className='px-3 border-2 rounded-xl border-black font-semibold hover:bg-gray-500 hover:text-white hover:border-black '
    >reset</button>
    </div>

    </div>
  )
}

export default Counter
