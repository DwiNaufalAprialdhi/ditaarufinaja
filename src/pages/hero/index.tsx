import Button from '@/components/material/Button'
import ViewMobile from '@/components/ui/ViewMobile'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function hero() {
      return (
            <>
                  <ViewMobile>
                        <main className='w-full h-full min-h-screen bg-[#F7E8E9CC] pt-[55px] pb-[43px] px-[30px] relative'>
                              <section className='HeaderSection lg:mb-[58px] mb-[10px] flex flex-col items-center justify-center'>
                                    <Image src={'/assets/images/intro-logo.svg'} alt="logo1" width={100} height={100} className='object-cover lg:w-[117px] w-[100px] h-max mb-[30px]' />
                                    <h2 className='font-bold lg:text-[24px] text-[20px] leading-[24px] text-center w-full max-w-[275px] text-brand'>Find your partner with muslim dating app</h2>
                              </section>
                              <section className='HeroSection w-full lg:h-[354px] h-[250px] lg:mb-[57px] mb-[30px] relative'>
                                    <div className='w-max h-max absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[1]'>
                                          <Image src={'/assets/ornament/ornament-hero-1.svg'} alt="hero-bg" width={100} height={100} className='lg:w-[116px] w-[65px] h-auto object-cover animate-pulse' />
                                    </div>
                                    <div className='w-max h-max absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[2] zoomIn'>
                                          <Image src={'/assets/ornament/ornament-hero-2.svg'} alt="hero-bg" width={100} height={100} className='lg:w-full w-[100px] h-full object-cover' />
                                    </div>
                                    <div className='w-max h-max absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[3] zoomIn2'>
                                          <Image src={'/assets/ornament/ornament-hero-3.svg'} alt="hero-bg" width={100} height={100} className='lg:w-full w-[200px] h-full object-cover' />
                                    </div>
                              </section>
                              <section className='w-full flex flex-col items-center justify-center'>
                                    <p className='w-full max-w-[300px] text-center font-normal text-xs leading-[18px] text-[#696969] mb-[17px]'>By signing up, you agree to our <span className='font-bold'>Terms of Service.</span> Learn how we process your data in our  and <span className='font-bold'>Cookies Policy</span>.</p>
                                    <Button link='/auth/register' className='mb-[14px]'>Create Account</Button>
                                    <Link href={'/auth/login'} className='font-normal text-sm text-center leading-[21px]'>Sign Up</Link>
                              </section>
                        </main>
                  </ViewMobile>
            </>
      )
}
