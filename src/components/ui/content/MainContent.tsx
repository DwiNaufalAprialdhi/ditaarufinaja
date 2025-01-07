/* eslint-disable @next/next/no-img-element */
import React from 'react'

type MainContentProps = {
      image: string,
      name: string,
      job: string,
      description: string
}

export default function MainContent(props: MainContentProps) {

      // function truncate
      const truncate = (str: string, n: number) => {
            return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      };

      return (
            <>
                  <div className='w-full h-full min-h-screen overflow-y-hidden relative'>
                        {/* gradient */}
                        <div className='gradient-mask'></div>
                        {/* image */}
                        <img src={props.image} alt="discover-1" className='w-full h-full object-cover' />
                        {/* overlay */}
                        <div className='absolute bottom-0 left-0 right-0 w-full h-[300px] p-5 bg-black/20 backdrop-blur-md transition-all duration-200 ease-in-out text-white'>
                              <h2 className='font-bold text-2xl leading-[36px]'>{props.name}</h2>
                              <h3 className='font-semibold text-sm leading-[21px] mb-[14px]'>{props.job}</h3>
                              <p className='font-normal text-sm leading-[21px]'>{truncate(props.description, 100)}</p>
                        </div>
                  </div>
            </>
      )
}
