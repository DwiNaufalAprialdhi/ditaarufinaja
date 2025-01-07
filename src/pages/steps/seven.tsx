import Button from '@/components/material/Button'
import Steps from '@/components/material/Steps'
import HeaderMain from '@/components/ui/HeaderMain'
import ViewMobileMain from '@/components/ui/ViewMobileMain'
import React from 'react'

export default function Seven() {
      return (
            <>
                  <ViewMobileMain>
                        <main className='relative z-20'>
                              <HeaderMain link={'/steps/six'} />
                              <section className='mt-[50px]'>
                                    <h2 className='font-semibold text-[24px] leading-[24px] tracking-[-3%] text-brand text-center'>Pendidikan terakhir Anda</h2>

                                    <div className='flex flex-col gap-y-[14px] mt-[50px]'>
                                          <div className='flex items-center justify-between py-2 px-[10px]'>
                                                <label htmlFor="status" className='font-medium text-base leading-[24px]'>SD</label>
                                                <div className='relative'>
                                                      <input type="radio" name="status" id="status" className='absolute top-0 right-0 w-5 h-5 opacity-0 cursor-pointer peer' />
                                                      <div className='bg-transparent border-2 border-[#D9D9D9] w-[20px] h-[20px] rounded-full peer-checked:bg-brand'></div>
                                                </div>
                                          </div>
                                          <div className='flex items-center justify-between py-2 px-[10px]'>
                                                <label htmlFor="status" className='font-medium text-base leading-[24px]'>SMP</label>
                                                <div className='relative'>
                                                      <input type="radio" name="status" id="status" className='absolute top-0 right-0 w-5 h-5 opacity-0 cursor-pointer peer' />
                                                      <div className='bg-transparent border-2 border-[#D9D9D9] w-[20px] h-[20px] rounded-full peer-checked:bg-brand'></div>
                                                </div>
                                          </div>
                                          <div className='flex items-center justify-between py-2 px-[10px]'>
                                                <label htmlFor="status" className='font-medium text-base leading-[24px]'>SMA / SMK/ SMU</label>
                                                <div className='relative'>
                                                      <input type="radio" name="status" id="status" className='absolute top-0 right-0 w-5 h-5 opacity-0 cursor-pointer peer' />
                                                      <div className='bg-transparent border-2 border-[#D9D9D9] w-[20px] h-[20px] rounded-full peer-checked:bg-brand'></div>
                                                </div>
                                          </div>
                                          <div className='flex items-center justify-between py-2 px-[10px]'>
                                                <label htmlFor="status" className='font-medium text-base leading-[24px]'>S1</label>
                                                <div className='relative'>
                                                      <input type="radio" name="status" id="status" className='absolute top-0 right-0 w-5 h-5 opacity-0 cursor-pointer peer' />
                                                      <div className='bg-transparent border-2 border-[#D9D9D9] w-[20px] h-[20px] rounded-full peer-checked:bg-brand'></div>
                                                </div>
                                          </div>
                                          <div className='flex items-center justify-between py-2 px-[10px]'>
                                                <label htmlFor="status" className='font-medium text-base leading-[24px]'>S2</label>
                                                <div className='relative'>
                                                      <input type="radio" name="status" id="status" className='absolute top-0 right-0 w-5 h-5 opacity-0 cursor-pointer peer' />
                                                      <div className='bg-transparent border-2 border-[#D9D9D9] w-[20px] h-[20px] rounded-full peer-checked:bg-brand'></div>
                                                </div>
                                          </div>
                                          <div className='flex items-center justify-between py-2 px-[10px]'>
                                                <label htmlFor="status" className='font-medium text-base leading-[24px]'>S3</label>
                                                <div className='relative'>
                                                      <input type="radio" name="status" id="status" className='absolute top-0 right-0 w-5 h-5 opacity-0 cursor-pointer peer' />
                                                      <div className='bg-transparent border-2 border-[#D9D9D9] w-[20px] h-[20px] rounded-full peer-checked:bg-brand'></div>
                                                </div>
                                          </div>
                                          <div className='flex items-center justify-between py-2 px-[10px]'>
                                                <label htmlFor="status" className='font-medium text-base leading-[24px]'>Lainnya</label>
                                                <div className='relative'>
                                                      <input type="radio" name="status" id="status" className='absolute top-0 right-0 w-5 h-5 opacity-0 cursor-pointer peer' />
                                                      <div className='bg-transparent border-2 border-[#D9D9D9] w-[20px] h-[20px] rounded-full peer-checked:bg-brand'></div>
                                                </div>
                                          </div>
                                          <section className='flex flex-col'>
                                                <input type="text" name='desc' id='desc' className='bg-transparent border-b border-zinc-800 outline-none w-full text-xs font-normal text-zinc-800 leading-[18px] py-[11px] mb-[14px]' placeholder='Deskripsikan Pendidikan terkahir Anda' />
                                                <h2 className='font-normal text-xs leading-[18px] text-zinc-800'>Pendidikan terakhir Anda akan tampil di profilmu.</h2>
                                          </section>
                                    </div>

                                    <section className='w-full flex lg:hidden flex-col gap-y-6 mt-[30px]'>
                                          <div className='relative z-[10]'>
                                                <Button link={'/steps/eight'} type={'button'}>
                                                      Continue
                                                </Button>
                                          </div>
                                          <Steps
                                                steps1={'bg-[#D9D9D9]'}
                                                steps2={'bg-[#D9D9D9]'}
                                                steps3={'bg-[#D9D9D9]'}
                                                steps4={'bg-[#D9D9D9]'}
                                                steps5={'bg-[#D9D9D9]'}
                                                steps6={'bg-brand'}
                                          />
                                    </section>
                              </section>
                        </main>

                        <section className='absolute w-full bottom-[61px] left-0 right-0 px-[30px] hidden lg:flex flex-col gap-y-6'>
                              <div className='relative z-[10]'>
                                    <Button link={'/steps/eight'} type={'button'}>
                                          Continue
                                    </Button>
                              </div>
                              <Steps
                                    steps1={'bg-[#D9D9D9]'}
                                    steps2={'bg-[#D9D9D9]'}
                                    steps3={'bg-[#D9D9D9]'}
                                    steps4={'bg-[#D9D9D9]'}
                                    steps5={'bg-[#D9D9D9]'}
                                    steps6={'bg-brand'}
                              />
                        </section>

                  </ViewMobileMain>
            </>
      )
}
