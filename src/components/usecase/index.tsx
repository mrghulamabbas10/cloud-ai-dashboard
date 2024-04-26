import React from 'react'
import Typewriter from '../typewriter'

export default function Index() {
  return (
    <div className='my-10'>
      <div className='bg-[#1c1c1c87] rounded-2xl md:h-[561px] h-[500px] px-4 flex flex-col justify-center items-center mt-10'>
        <h1 className='md:text-[56px] text-[40px] font-extrabold gradient-text text-center md:px-20 px-0 '>
          <Typewriter text='Cloud AI brings Decentralization to Cloud Computing.' />
        </h1>
        <p className='text-lg mt-3 md:px-48 px-0 text-center'>
          By leveraging the newfound possibilities of DePIN (Decentralized
          Physical Infrastructure Networks), HostAI offers unparalleled access
          to the realm of cloud computing. Whether it is for gaming, design, or
          hosting, cloud infrastructure has never been this easy. Exchange $ETH,
          $USDC, $BTC, and more through HostAI services and receive your
          unrestricted access today!
        </p>
      </div>
    </div>
  )
}
