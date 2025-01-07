import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardEbookProps = {
      link: string
      images: string
      title: string
      name: string
      children?: React.ReactNode
}

export default function CardEbook(props: CardEbookProps) {

      // truncate
      const truncate = (str: string, n: number) => {
            return str.length > n ? str.substr(0, n - 1) + '...' : str;
      }

      return (
            <>
                  <Link href={props.link} className='w-full h-auto flex flex-col gap-y-[10px] group relative overflow-hidden'>
                        <div className='w-full h-[150px] rounded-[15px] overflow-hidden relative'>
                              {props.children}
                              <Image src={props.images} alt='ebook' width={114} height={150} className='w-full h-full object-cover group-hover:scale-105 duration-300' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                              <h2 className='font-bold text-xs leading-[18px]'>
                                    {truncate(props.title, 18)}
                              </h2>
                              <h2 className='font-normal text-[10px] leading-[15px] text-center text-[#8E8E93]'>{props.name}</h2>
                        </div>
                  </Link>
            </>
      )
}
