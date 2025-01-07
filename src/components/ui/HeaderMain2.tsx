import Link from 'next/link'
import React from 'react'

type props = {
      link: string
      title: string
      className?: string
}

export default function HeaderMain2(props: props) {
      return (
            <>
                  <main className={`flex items-center justify-start gap-x-[14px] ${props.className}`}>
                        <Link href={props.link}>
                              <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.2 6.75061L14.4494 5L7 12.4494L14.4494 19.8988L16.2 18.1482L10.5136 12.4494L16.2 6.75061Z" fill="#27272A" />
                              </svg>
                        </Link>
                        <h2 className='font-semibold text-[20px] leading-[28px] text-zinc-800'>{props.title}</h2>
                  </main>
            </>
      )
}
