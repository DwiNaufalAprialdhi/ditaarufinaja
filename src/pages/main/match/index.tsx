/* eslint-disable @typescript-eslint/no-unused-vars */
import IconLoveCircle from '@/components/icon/IconLoveCircle'
import IconLoveCircleTwo from '@/components/icon/IconLoveCircleTwo'
import Button from '@/components/material/Button'
import ButtonSmooth from '@/components/material/ButtonSmooth'
import ViewMobileMain from '@/components/ui/ViewMobileMain'
import Image from 'next/image'
import React from 'react'

export default function index() {
      return (
            <>
                  <ViewMobileMain>
                        <main className='relative z-20'>
                              <section className='w-full h-[403px] relative'>
                                    <IconLoveCircle className='absolute -top-[10px] mt-[23px] left-[120px] z-30' />
                                    <div className='w-[160px] h-[240px] rounded-[15px] absolute bottom-[20px] left-[60px] -rotate-[10deg] z-20 overflow-hidden bounce1 shadow-2xl'>
                                          <Image src='/assets/images/discover-1.jpeg' width={160} height={240} className='rounded-[15px] w-full h-full object-cover' alt={'discover'} />
                                    </div>
                                    <div className='w-[160px] h-[240px] rounded-[15px] absolute top-[20px] left-[120px] rotate-[10deg] z-10 blur-sm overflow-hidden bounce2'>
                                          <Image src='/assets/images/discover-3.png' width={160} height={240} className='rounded-[15px] w-full h-full object-cover' alt={'discover'} />
                                    </div>
                                    <IconLoveCircleTwo className='absolute -bottom-[10px] left-[70px] z-30 -rotate-[20deg]' />
                              </section>

                              <section className='mt-[45px] mb-[67px] flex flex-col items-center justify-center'>
                                    <h2 className='font-semibold text-2xl leading-[24px] tracking-[-3%] text-center text-brand mb-[14px]'>Anda Match, Pay Murphy!</h2>
                                    <p className='font-normal text-xs leading-[18px] tracking-[-3%] text-center'>Mulai Ta’aruf sekarang dengan memulai
                                          perbincangan dengan pendamping
                                    </p>
                              </section>

                              <section className='flex flex-col gap-y-[14px]'>
                                    <Button link={'#'} >
                                          Start Ta’aruf
                                    </Button>
                                    <ButtonSmooth link={'/main/content'} >
                                          Keep Sweeping
                                    </ButtonSmooth>
                              </section>
                        </main>
                  </ViewMobileMain>
            </>
      )
}
