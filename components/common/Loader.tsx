"use client";

import { MoonLoader } from "react-spinners"

const Loader = () => {
  return (
    <div className='w-[100vw] h-[100vh]
    flex justify-center items-center'>
      <MoonLoader size={75} color="#36d7b7" speedMultiplier={0.25} /> 
    </div>
  )
}

export default Loader