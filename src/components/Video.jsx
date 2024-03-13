import React from 'react'

function Video({id,title = "React JS Tutorial",channel,views,time,verified,dispatch,editVideo}) {



  return (
    <>
        <div className="card  border-2  rounded-lg border-black  w-64 h-[340px] flex flex-col justify-center items-center bg-white relative">

<div 
className='border-2 px-2 rounded-md border-black hover:bg-gray-500 hover:text-white hover:border-black absolute top-0 right-0 font-bold shadow-md'
onClick={() => dispatch({type:"Delete",payload:id}) }
>X</div>

<div 
className='border-2 px-2 rounded-md border-black hover:bg-gray-500 hover:text-white hover:border-black absolute top-0 left-0 font-bold shadow-md'
onClick={() => editVideo(id)}
>edit</div>


    <div className="w-48 rounded-lg border-2 border-gray-600 box-border overflow-hidden mt-4 ">

     <img 
     className='w-full rounded-lg object-cover object-center overflow-hidden'
      src={`https://picsum.photos/id/${id}/160/90`}
      alt="Katherine Johnson"
    />

 </div>

 <div className="mt-3 flex flex-col w-48">

    <h1
    className='font-semibold text-center 
    border-2 px-1 rounded-lg border-gray-300 hover:bg-gray-500 hover:text-white hover:border-black shadow-md 
'>{title} {verified ? "✅":"" }</h1>

    <p className='w-full leading-[18px] mt-2'>As your project grows, you will notice that many of designs can be composed by reusing components </p>

<h2 className="text-center mt-2 font-semibold">channel : {channel}</h2>

<div className='flex gap-4 mt-1'>

<div 
className='border-2 px-1 rounded-lg border-gray-300 hover:bg-gray-500 hover:text-white hover:border-black shadow-md'>{views} : views </div>

<div
className='border-2 px-1 rounded-lg border-gray-300  hover:bg-gray-500 hover:text-white hover:border-black shadow-md'>{time}</div>

</div>

 </div>
 
        </div>



    </>
  )
}


export default Video;
