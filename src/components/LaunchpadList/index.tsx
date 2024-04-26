import Image from 'next/image'
import React from 'react'

const LaunchpadList_DATA = [
  {
    imagePath: '/images/upcoming-img.png',
    comming: 'UPCOMING',
    title: 'TBA',
    desc: ``,
    projectType: 'Ai',
    chain: 'Solana',
    startTime: '5PM UTC (29th March)',
    endTime: '5PM UTC (30th March)',
    softCap: '400',
    hardCap: '4000',
  },
  {
    imagePath: '/images/upcoming-img.png',
    title: 'TBA',
    comming: 'UPCOMING',
    desc: ``,
    projectType: 'Ai',
    chain: 'Solana',
    startTime: '5PM UTC (29th March)',
    endTime: '5PM UTC (30th March)',
    softCap: '400',
    hardCap: '4000',
  },
  {
    imagePath: '/images/upcoming-img.png',
    title: 'TBA',
    comming: 'UPCOMING',
    desc: ``,
    projectType: 'Ai',
    chain: 'Solana',
    startTime: '5PM UTC (29th March)',
    endTime: '5PM UTC (30th March)',
    softCap: '400',
    hardCap: '4000',
  },
]

export default function LaunchpadList() {
  return (
    <div className='text-white'>
      <h1 className='font-bold text-[47px] md:mt-[-80px] mt-4'>
        Launchpad List
      </h1>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-y-20 gap-x-5 md:my-20 my-10'>
        {LaunchpadList_DATA.map((item, index) => (
          <div
            className='launchpad_card_bg px-5 flex flex-col'
            key={index}
          >
            <div className='relative w-full h-[181px]'>
              <Image
                src={item.imagePath}
                alt={item.title}
                fill
                objectFit='contain'
              />
            </div>
            <div className='flex flex-col gap-2 md:mt-0 mt-5'>
              <span className='w-[108px] px-3 py-2 text-sm leading-4 text-lime-600 whitespace-nowrap rounded-lg border border-lime-400 border-solid bg-green-950'>
                {item.comming}
              </span>
              <h3 className='font-bold text-2xl mt-3'>{item.title}</h3>
              <p className='text-gray-600'>{item.desc}</p>
              <p className='font-medium'>Type Project: {item.projectType}</p>
              <p className='font-medium'>Chain: {item.chain}</p>
              <p className='font-medium'>Start Time: {item.startTime}</p>
              <p className='font-medium'>End Time: {item.endTime}</p>
              <p className='font-medium'>Soft Cap: {item.softCap}</p>
              <p className='font-medium'>Hard Cap: {item.hardCap}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
