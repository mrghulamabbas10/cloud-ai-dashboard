import React from 'react'

export default function HomeMain() {
  return (
    <div className='mb-20 mt-10'>
      <div className='flex items-center gap-4'>
        <button className='border-b border-white text-white p-3 text-lg '>
          Complete
        </button>
        <button className=' text-[#fff6] p-3 text-lg'>Dedicated</button>
        <button className=' text-[#fff6] p-3 text-lg'>Gaming</button>
      </div>
      <div className='bg-[#1c1c1c87] rounded-2xl w-full h-[402px] flex flex-col justify-center items-center mt-10'>
        <h1 className='text-[48px] font-extrabold gradient-text text-center'>
          Welcome to the Cloud
        </h1>
        <p className='text-lg'>Get started by deploying your first instance</p>
        <button className='btn_bg px-8 py-3 rounded-2xl mt-5'>
          Deploy Instance
        </button>
      </div>
    </div>
  )
}
