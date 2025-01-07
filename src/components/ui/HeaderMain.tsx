import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
      className?: string
      link: string
}
export default function HeaderMain(props: Props) {
      return (
            <>
                  <main className='w-full relative'>
                        <Link href={props.link} className={`flex items-center justify-center cursor-pointer ${props.className}`}>
                              <svg className='w-[11px] h-max absolute top-3 left-0' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.115 2.115L9 0L0 9L9 18L11.115 15.885L4.245 9L11.115 2.115Z" fill="#27272A" />
                              </svg>
                        </Link>
                        <div className='flex items-center justify-center'>
                              <Image src={'/assets/images/intro-logo.svg'} alt="Jofisah" width={117} height={42} className='w-[117px] h-max' />
                        </div>
                  </main>

                  {/* <main className='w-full flex items-center justify-center h-auto relative'>
                        <Link href={props.link} className={`block absolute top-1/2 -translate-y-1/2 bg-pink-400 left-0 ${props.className}`}>
                              <svg className='w-[11px] h-max absolute top-3 left-0' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.115 2.115L9 0L0 9L9 18L11.115 15.885L4.245 9L11.115 2.115Z" fill="#27272A" />
                              </svg>
                        </Link>
                        <div className='flex items-center justify-center'>
                              <Image src={'/assets/images/intro-logo.svg'} alt="Jofisah" width={117} height={42} className='w-[117px] h-max' />
                        </div>
                  </main> */}
            </>
      )
}
