import Image from 'next/image'
import React from 'react'

type ProfileProps = {
      className?: string
      images: string
      name: string
      job: string
}

export default function Profile(props: ProfileProps) {
      return (
            <>
                  <section className={`w-full flex items-center gap-x-[14px] ${props.className}`}>
                        <div className='w-[50px] h-[50px] rounded-full'>
                              <Image src={props.images} alt='discover' width={50} height={50} className='rounded-full w-full h-full object-cover' />
                        </div>
                        <div className='flex flex-col gap-y-[4px]'>
                              <h2 className='font-bold text-sm leading-[21px]'>{props.name}</h2>
                              <h2 className='font-normal text-xs leading-[18px]'>{props.job}</h2>
                        </div>
                  </section>
            </>
      )
}
