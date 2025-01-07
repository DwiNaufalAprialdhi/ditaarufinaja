import Image from 'next/image'
import React from 'react'

type props = {
      children: React.ReactNode
}
export default function ViewMobile(props: props) {
      return (
            <>
                  <main className='w-full h-max bg-stone-50'>
                        <Image src="/assets/ornament/ornament-1.svg" alt="ornament-1" width={50} height={50} className='fixed opacity-40 lg:block hidden -top-[300px] -left-[300px] w-[800px] h-[800px] object-cover' />
                        <Image src="/assets/ornament/ornament-1.svg" alt="ornament-1" width={50} height={50} className='fixed opacity-40 lg:block hidden -bottom-[300px] -right-[300px] w-[800px] h-[800px] object-cover' />
                        <section className='w-full h-full min-h-screen lg:max-w-[480px] max-w-none lg:min-w-[480px] min-w-min mx-auto bg-white/80 lg:shadow-[0_0_10px_0_#F7E8E9CC] shadow-none relative z-[99] block overflow-hidden'>
                              {props.children}
                        </section>
                  </main>
            </>
      )
}
