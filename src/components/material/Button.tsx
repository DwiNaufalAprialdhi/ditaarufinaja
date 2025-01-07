import Link from 'next/link'
import React from 'react'

type props = {
      link: string
      children: React.ReactNode
      className?: string
      type?: string
}
export default function Button(props: props) {
      return (
            <>
                  <Link href={props.link} type={props.type ? props.type : 'button'} className={`lg:p-[15px] p-3 bg-brand text-white w-full font-bold text-sm flex items-center justify-center text-center rounded-[15px] hover:bg-opacity-80 duration-200 ${props.className}`}>
                        {props.children}
                  </Link>
            </>
      )
}
