import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LaunchpadMain() {
  return (
    <div className='my-10'>
      <div className='launchpad_bg px-10 py-9'>
        <div className='flex items-center justify-between flex-wrap gap-4'>
          <div className='flex items-center gap-3'>
            <div className='relative w-20 h-20'>
              <Image
                src='/images/launch-logo.png'
                alt='logo'
                fill
                objectFit='cover'
              />
            </div>
            <h3 className='text-[45px] font-bold'>BETA</h3>
          </div>
          <div className='flex items-center gap-2 flex-wrap'>
            <span className=' px-4 py-1 text-sm leading-4 text-lime-600 whitespace-nowrap rounded-lg border border-lime-400 border-solid bg-green-950'>
              ENDED
            </span>
            <span className=' px-4 py-1 text-sm leading-4 text-lime-600 whitespace-nowrap rounded-lg border border-lime-400 border-solid bg-green-950'>
              Ai
            </span>
            <span className=' px-4 py-1 text-sm leading-4 text-lime-600 whitespace-nowrap rounded-lg border border-lime-400 border-solid bg-green-950'>
              DePin
            </span>
            <span className=' px-4 py-1 text-sm leading-4 text-lime-600 whitespace-nowrap rounded-lg border border-lime-400 border-solid bg-green-950'>
              RWA
            </span>

            <span className=' px-4 py-1 text-sm leading-4 text-lime-600 whitespace-nowrap rounded-lg border border-lime-400 border-solid bg-green-950'>
              PRESALE
            </span>
            <span className=' px-4 py-1 text-sm leading-4 text-lime-600 whitespace-nowrap rounded-lg border border-lime-400 border-solid bg-green-950'>
              KYC
            </span>
            <span className=' px-4 py-1 text-sm leading-4 text-lime-600 whitespace-nowrap rounded-lg border border-lime-400 border-solid bg-green-950'>
              SAFU
            </span>
          </div>
        </div>
        <p className='mt-6 text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.  Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      {/* box 2  */}
      <div className='launchpad_bg px-10 py-9 mt-8 mb-5'>
        <div className='flex justify-between items-center flex-wrap gap-4'>
          <h5 className='font-medium text-4xl'>Sale Ended</h5>
          <div className='relative w-[270px] h-[61px]'>
            <Image
              src='/images/salona.png'
              alt='logo'
              fill
              objectFit='cover'
            />
          </div>
        </div>
        <div className='flex items-end gap-5 flex-wrap mt-5'>
          <div className='bg-[#142b1f] py-4 px-10 md:w-auto w-full rounded-3xl'>
            <h5 className='font-bold text-2xl'>400 SOL</h5>
            <p className='text-gray-500'>Soft Cap</p>
          </div>
          <div className='bg-[#142b1f] py-4 px-10  md:w-auto w-full rounded-3xl'>
            <h5 className='font-bold text-2xl'>400 SOL</h5>
            <p className='text-gray-500'>HArd Cap</p>
          </div>
          <div className='md:w-[55%] w-full md:-translate-y-5'>
            <div className='flex items-center justify-between w-full'>
              <p className='text-gray-500'>11247/ 400 SOL</p>
              <p className='text-gray-500'>Progress: 2811.75%</p>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2'>
              <div
                className='bg-[#94F003] h-5 rounded-full'
                style={{ width: '100%' }}
              ></div>
            </div>
          </div>
        </div>
        {/* input  */}
        <div className='mt-8'>
          <label
            htmlFor=''
            className='font-bold text-2xl block'
          >
            Contribution Amount
          </label>
          <div className='w-full relative mt-5'>
            <input
              type='text'
              placeholder='00.1'
              className='bg-white bg-opacity-5 px-8 py-4 w-full'
            />
            <span className='text-[#94F020] absolute right-8 top-5'>MAX</span>
          </div>
        </div>
      </div>
      <div className=''>
        <Link href=''>
          <div className='relative w-[170px] h-[80px] float-end  '>
            <Image
              src='/images/claim-btn.png'
              alt='logo'
              fill
              objectFit='cover'
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
