import React from 'react'

export default function ApplyIdo() {
  return (
    <div>
      <h1 className='font-bold text-[47px] md:mt-[-80px] mt-4'>Apply IDO</h1>

      <div className='md:mt-20 mt-12 grid md:grid-cols-2 grid-cols-1 gap-10 '>
        <div>
          <label
            htmlFor=''
            className='font-bold text-xl block'
          >
            Your Project Name
          </label>
          <div className='w-full mt-5'>
            <input
              type='text'
              placeholder='Lorem ipsum dolor sit amet, consectetur'
              className='bg-white bg-opacity-[0.1]  px-8 py-4 w-full'
            />
          </div>
        </div>
        <div>
          <label
            htmlFor=''
            className='font-bold text-xl block'
          >
            Please confirm your position with this project.
          </label>
          <div className='w-full mt-5'>
            <input
              type='text'
              placeholder='Type your answer here...'
              className='bg-white bg-opacity-[0.1]  px-8 py-4 w-full'
            />
          </div>
        </div>
        <div>
          <label
            htmlFor=''
            className='font-bold text-xl block'
          >
            What’s your email?
          </label>
          <div className='w-full mt-5'>
            <input
              type='text'
              placeholder='Type your answer here...'
              className='bg-white bg-opacity-[0.1]  px-8 py-4 w-full'
            />
          </div>
        </div>
        <div>
          <label
            htmlFor=''
            className='font-bold text-xl block'
          >
            What’s your telegram ID?
          </label>
          <div className='w-full mt-5'>
            <input
              type='text'
              placeholder='@...........'
              className='bg-white bg-opacity-[0.1]  px-8 py-4 w-full'
            />
          </div>
        </div>
        <div>
          <label
            htmlFor=''
            className='font-bold text-xl block'
          >
            What’s your website?
          </label>
          <div className='w-full mt-5'>
            <input
              type='text'
              placeholder='Type your answer here...'
              className='bg-white bg-opacity-[0.1]  px-8 py-4 w-full'
            />
          </div>
        </div>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 my-20'>
        <div>
          <label
            htmlFor=''
            className='font-bold text-xl block'
          >
            Description
          </label>
          <div className='w-full mt-5'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Initial Index Offering (IDO)'
                className='bg-white bg-opacity-[0.1]  px-8 py-4 w-full pl-20'
              />
              <span className='bg-[#474947] border border-gray-300 px-4 py-2 absolute left-0 translate-x-3 translate-y-2'>
                A
              </span>
            </div>
          </div>
          {/* <div className='w-full mt-5'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Incubation Service'
                className='bg-white bg-opacity-[0.1]  px-8 py-4 w-full pl-20'
              />
              <span className='bg-[#474947] border border-gray-300 px-4 py-2 absolute left-0 translate-x-3 translate-y-2'>
                B
              </span>
            </div>
          </div>

          <div className='w-full mt-5'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Advisory'
                className='bg-white bg-opacity-[0.1]  px-8 py-4 w-full pl-20'
              />
              <span className='bg-[#474947] border border-gray-300 px-4 py-2 absolute left-0 translate-x-3 translate-y-2'>
                C
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
