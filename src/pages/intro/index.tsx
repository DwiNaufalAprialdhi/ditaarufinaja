import Button from '@/components/material/Button'
import ViewMobile from '@/components/ui/ViewMobile'
import Image from 'next/image'
import React from 'react'

export default function Intro() {
      return (
            <>
                  <ViewMobile>
                        <main className='w-full h-full min-h-screen bg-[#F7E8E9CC] relative'>
                              {/* Ornament Kiri Atas */}
                              <div className='absolute -top-[120px] -left-[120px] z-[0]'>
                                    <Image src="/assets/ornament/ornament-1.svg" alt="ornament-1" width={50} height={50} className='w-full h-max object-cover opacity-50' />
                              </div>
                              {/* Ornament Kanan Bawah */}
                              <div className='absolute -bottom-[120px] -right-[120px] z-[0]'>
                                    <Image src="/assets/ornament/ornament-1.svg" alt="ornament-1" width={50} height={50} className='w-full h-max object-cover opacity-50' />
                              </div>
                              {/* Gradient */}
                              <div className='w-full h-[500px] top-[150px] left-0 absolute bg-gradient-to-b from-transparent via-[#F7E8E9CC] to-transparent z-[11]'></div>

                              <section className='w-full h-max grid grid-cols-4 gap-x-4 relative px-5 pt-5 z-[10]'>
                                    <div className='col-span-1 flex flex-col gap-y-4 intro1Animation1'>
                                          <Image src={'/assets/images/intro-1.png'} alt='intro-1' width={100} height={100} className='w-full h-max object-cover rounded-[14px]' />
                                          <Image src={'/assets/images/intro-5.png'} alt='intro-2' width={100} height={100} className='w-full h-max object-cover rounded-[14px]' />
                                    </div>
                                    <div className='col-span-1 flex flex-col gap-y-4 intro1Animation2 translate-y-10'>
                                          <Image src={'/assets/images/intro-2.png'} alt='intro-2' width={100} height={100} className='w-full h-max object-cover rounded-[14px]' />
                                          <Image src={'/assets/images/intro-6.png'} alt='intro-6' width={100} height={100} className='w-full h-max object-cover rounded-[14px]' />
                                    </div>
                                    <div className='col-span-1 flex flex-col gap-y-4 intro1Animation1'>
                                          <Image src={'/assets/images/intro-3.png'} alt='intro-1' width={100} height={100} className='w-full h-max object-cover rounded-[14px]' />
                                          <Image src={'/assets/images/intro-7.png'} alt='intro-2' width={100} height={100} className='w-full h-max object-cover rounded-[14px]' />
                                    </div>
                                    <div className='col-span-1 flex flex-col gap-y-4 intro1Animation2 translate-y-10'>
                                          <Image src={'/assets/images/intro-4.png'} alt='intro-1' width={100} height={100} className='w-full h-max object-cover rounded-[14px]' />
                                          <Image src={'/assets/images/intro-8.png'} alt='intro-2' width={100} height={100} className='w-full h-max object-cover rounded-[14px]' />
                                    </div>
                              </section>

                              <section className='pt-[100px] px-5 relative flex flex-col items-center justify-center z-[20]'>
                                    <Image src={'/assets/images/intro-logo.svg'} alt="intro logo" width={100} height={100} className='lg:w-[117px] w-[90px] h-max object-cover lg:mb-[50px] mb-[30px]' priority={true} />
                                    <h2 className='font-bold lg:text-[24px] text-[20px] text-center mb-[14px] text-brand'>Lets Get Started</h2>
                                    <p className='font-normal lg:text-sm text-xs text-center w-full lg:max-w-[325px] max-w-[250px] lg:mb-[50px] mb-[30px]'>Sudah siap membangun keluarga sakinah? <span className='font-bold'>Yuk, mulai perjalanan mencari jodohmu sekarang</span></p>
                                    <Button link={'/hero'}>
                                          Continue
                                    </Button>
                              </section>
                        </main>
                  </ViewMobile>
            </>
      )
}
