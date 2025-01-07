import Button from '@/components/material/Button'
import Steps from '@/components/material/Steps'
import HeaderMain from '@/components/ui/HeaderMain'
import ViewMobileMain from '@/components/ui/ViewMobileMain'
import Image from 'next/image'
import React from 'react'

export default function Two() {
      return (
            <>
                  <ViewMobileMain>
                        <main className='relative z-[10]'>
                              <HeaderMain link={'/steps/one'} />

                              <section className='mt-[50px] flex flex-col gap-y-6'>
                                    <h2 className='font-semibold text-[24px] leading-[24px] tracking-[-3%] text-brand'>Apa gendermu?</h2>
                                    <div className='grid grid-cols-2 gap-x-[14px]'>
                                          <button className='col-span-1 bg-[#FDE3E5] border-[2px] border-[#FDCBCE] p-[10px] flex flex-col gap-y-[10px] items-center justify-center rounded-[20px] hover:scale-105 duration-200'>
                                                <Image src={'/assets/icon/muslim.svg'} alt='muslim' width={64} height={64} className='w-[64px] h-[64px] object-contain' />
                                                <p className='font-bold text-sm leading-[21px] text-center'>Ikhwan</p>
                                          </button>
                                          <button className='col-span-1 bg-[#FDE3E5] border-[2px] border-[#FDCBCE] p-[10px] flex flex-col gap-y-[10px] items-center justify-center rounded-[20px] hover:scale-105 duration-200'>
                                                <Image src={'/assets/icon/hijab.svg'} alt='hijab' width={64} height={64} className='w-[64px] h-[64px] object-contain' />
                                                <p className='font-bold text-sm leading-[21px] text-center'>Akhwat</p>
                                          </button>
                                    </div>
                              </section>
                        </main>

                        <section className='absolute w-full bottom-[61px] left-0 right-0 px-[30px] flex flex-col gap-y-6'>
                              <div className='relative z-[10]'>
                                    <Button link={'/steps/three'} type={'button'}>
                                          Continue
                                    </Button>
                              </div>
                              <Steps
                                    steps1={'bg-[#D9D9D9]'}
                                    steps2={'bg-brand'}
                                    steps3={'bg-[#D9D9D9]'}
                                    steps4={'bg-[#D9D9D9]'}
                                    steps5={'bg-[#D9D9D9]'}
                                    steps6={'bg-[#D9D9D9]'}
                              />
                        </section>
                  </ViewMobileMain>
            </>
      )
}
