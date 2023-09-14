import React from 'react'
import "./spinner.css";

function Spinner() {
  return (
    <div className='flex items-center  bg-gray-700 justify-center h-screen w-screen text-2xl font-semibold'>
    <div className='loader'></div>
    <div>
      Loading.....
    </div>


    </div>
  )
}

export default Spinner