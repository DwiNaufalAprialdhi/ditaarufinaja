import React from 'react'
import ViewMobile from './ViewMobile'
import Image from 'next/image'

type props = {
      children: React.ReactNode
}

export default function ViewMobileMain(props: props) {
      return (
            <>
                  <ViewMobile>
                        <main className='w-full h-auto min-h-screen bg-brand/5 lg:py-[53px] py-5 lg:px-[30px] px-5 relative'>

                              {/* ===== Ornament ===== */}
                              <div className='absolute top-[-89px] left-[-89px] w-max h-max z-[1]'>
                                    <Image src={'/assets/ornament/ornament-1.svg'} alt="ornament" width={100} height={100} className='object-cover lg:w-full w-full h-max' />
                              </div>
                              <div className='absolute bottom-[-89px] right-[-89px] w-max h-max z-[1]'>
                                    <Image src={'/assets/ornament/ornament-1.svg'} alt="ornament" width={100} height={100} className='object-cover lg:w-full w-full h-max' />
                              </div>
                              {/* ===== Ornament ===== */}

                              {props.children}

                        </main>
                  </ViewMobile>
            </>
      )
}
