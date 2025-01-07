import ChevronLeft from '@/components/icon/ChevronLeft'
import Link from 'next/link'
import React from 'react'

type HeadingProps = {
      link: string,
      title: string,
      subtitle: string,
      children: React.ReactNode,
      className?: string
}

export default function Heading(props: HeadingProps) {
      return (
            <>
                  <div className='w-full absolute top-[36px] left-0 px-[32px] flex items-center justify-between z-[99]'>
                        <Link href={props.link} className='w-[52px] h-[52px] hover:bg-opacity-80 duration-200 flex items-center justify-center padding-[14px] bg-white rounded-[15px]'>
                              <ChevronLeft />
                        </Link>
                        <div className='flex flex-col items-center justify-center text-[#FEF2F3]'>
                              <h2 className='font-medium text-[20px] leading-[30px]'>{props.title}</h2>
                              <h4 className='font-normal text-xs leading-[18px]'>{props.subtitle}</h4>
                        </div>
                        <div className='w-[52px] h-[52px] opacity-0 hover:bg-opacity-80 duration-200 flex items-center justify-center padding-[14px] bg-white rounded-[15px]'>
                              {props.children}
                        </div>
                  </div>
            </>
      )
}
