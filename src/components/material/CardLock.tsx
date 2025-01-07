import React from 'react'
import IconLock from '../icon/IconLock'

export default function CardLock() {
      return (
            <>
                  <div className='w-full h-full absolute top-0 left-0 bg-black/80 flex flex-col items-center justify-center px-[7px] z-[5]'>
                        <IconLock className='w-[60px] h-[60px] object-contain text-white' />
                        <h2 className='font-normal text-[10px] text-center text-[#C7C7CC]'>Selesaikan E-Book sebelumnya</h2>
                  </div>
            </>
      )
}
