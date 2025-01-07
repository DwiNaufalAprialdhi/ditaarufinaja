import Image from 'next/image'
import React from 'react'
import IconEye from '../icon/IconEye'
import IconGood from '../icon/IconGood'
import Link from 'next/link'

type ItemWhatsNewProps = {
      link: string
      images: string
      title: string
      like: string
      watch: string
      category: string
      date: string
}

export default function ItemWhatsNew(props: ItemWhatsNewProps) {


      // funnction truncate
      const truncate = (str: string, n: number) => {
            return str.length > n ? str.substr(0, n - 1) + '...' : str;
      }

      return (
            <>
                  <Link href={props.link} className='grid grid-cols-12 items-center gap-x-[15px] group'>
                        <div className='w-full h-[75px] col-span-3 rounded-[14px] overflow-hidden'>
                              <Image src={props.images} alt='banner' width={50} height={50} className='w-full h-full object-cover group-hover:scale-110 duration-300' />
                        </div>
                        <div className='w-full h-[75px] col-span-5 overflow-hidden flex flex-col items-start justify-between'>
                              <h2 className='font-normal text-xs'>{truncate(props.title, 52)} </h2>
                              <div className='w-full flex items-center gap-x-[14px]'>
                                    <div className='flex items-center gap-x-1'>
                                          <IconEye className='w-[9px] h-auto text-[#696969]' />
                                          <h2 className='font-normal text-[8px] text-[#696969]'>{props.like}</h2>
                                    </div>
                                    <div className='flex items-center gap-x-1'>
                                          <IconGood className='w-[9px] h-auto text-[#696969]' />
                                          <h2 className='font-normal text-[8px] text-[#696969]'>{props.watch}</h2>
                                    </div>
                              </div>
                        </div>
                        <div className='w-full h-[75px] col-span-4 overflow-hidden flex flex-col items-normal justify-between'>
                              <div className='w-full h-max flex items-end justify-end'>
                                    <div className='w-max py-[2px] px-[4px] rounded-full border border-[#696969]'>
                                          <h2 className='font-normal text-[8px] text-center text-[#696969]'>{props.category}</h2>
                                    </div>
                              </div>
                              <h2 className='font-normal text-[8px] text-end text-[#696969]'>{props.date}</h2>
                        </div>
                  </Link>
            </>
      )
}
