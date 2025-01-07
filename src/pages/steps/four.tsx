/* eslint-disable react-hooks/rules-of-hooks */
import Button from '@/components/material/Button'
import Steps from '@/components/material/Steps'
import HeaderMain from '@/components/ui/HeaderMain'
import ViewMobileMain from '@/components/ui/ViewMobileMain'
import Image from 'next/image'
import React, { useState } from 'react'

export default function four() {
      const [count, setCount] = useState(0);

      const handleNextCount = () => {
            setCount(count + 1)
      }

      const handlePrevCount = () => {
            if (count > 0) {
                  setCount(count - 1)
            }
      }
      return (
            <>
                  <ViewMobileMain>
                        <main className='relative z-[10]'>
                              <HeaderMain link={'/steps/three'} />

                              <section className='mt-[50px] flex flex-col'>
                                    <h2 className='font-semibold text-[24px] leading-[24px] tracking-[-3%] text-brand text-center'>Jumlah anak yang dimiliki</h2>
                                    <Image src={'/assets/icon/icon-bottle-baby.svg'} alt='bottle' width={150} height={150} className='w-[150] h-max object-contain mx-auto mt-[50px]' />
                                    <div className='flex items-center mt-[50px] justify-center gap-x-5'>
                                          <div onClick={handlePrevCount} className='relative z-20 cursor-pointer hover:scale-110 duration-200 w-[11px] group'>
                                                <svg className='w-[10px] text-zinc-800 group-hover:text-brand' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M8.645 1.645L7 0L0 7L7 14L8.645 12.355L3.30167 7L8.645 1.645Z" fill="currentColor" />
                                                </svg>

                                          </div>
                                          <div className='relative z-20'>
                                                <h2 className={`font-medium text-[25px] leading-[37px] tracking-[-3%] text-center ${count === 0 ? 'text-[#D9D9D9]' : 'text-zinc-800'}`}>{count}</h2>
                                          </div>
                                          <div onClick={handleNextCount} className='relative z-20 cursor-pointer hover:scale-110 duration-200 w-[11px] group'>
                                                <svg className='w-[10px] text-zinc-800 group-hover:text-brand' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                </svg>
                                          </div>
                                    </div>
                                    <p className='font-normal text-xs leading-[18px] tracking-[-3%] text-center mt-[14px] text-[#696969]'>Jika anda sudah memiliki anak dari pernikahan sebelumnya dan saat ini, silahkan masukkan jumlahnya</p>
                              </section>
                        </main>

                        <section className='absolute w-full bottom-[61px] left-0 right-0 px-[30px] flex flex-col gap-y-6'>
                              <div className='relative z-[10]'>
                                    <Button link={'/steps/five'} type={'button'}>
                                          Continue
                                    </Button>
                              </div>
                              <Steps
                                    steps1={'bg-[#D9D9D9]'}
                                    steps2={'bg-[#D9D9D9]'}
                                    steps3={'bg-[#D9D9D9]'}
                                    steps4={'bg-brand'}
                                    steps5={'bg-[#D9D9D9]'}
                                    steps6={'bg-[#D9D9D9]'}
                              />
                        </section>
                  </ViewMobileMain>
            </>
      )
}
