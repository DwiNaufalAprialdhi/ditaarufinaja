import Button from '@/components/material/Button'
import Steps from '@/components/material/Steps'
import HeaderMain from '@/components/ui/HeaderMain'
import ViewMobileMain from '@/components/ui/ViewMobileMain'
import React from 'react'

export default function one() {
      return (
            <>
                  <ViewMobileMain>
                        <main className='relative z-[10]'>
                              <HeaderMain link={'/intro'} />

                              <section className='mt-[50px] flex flex-col'>
                                    <label htmlFor="username" className='font-semibold text-[24px] leading-[24px] text-brand mb-[24px]'>Nama panggilanmu?</label>
                                    <input type="text" name='username' id='username' className='bg-transparent border-b border-zinc-800 outline-none w-full text-xs font-normal text-zinc-800 leading-[18px] py-[11px] mb-[14px]' placeholder='Masukkan nama panggilan' />
                                    <h2 className='font-normal text-xs leading-[18px] text-zinc-800'>Nama panggilan akan tampil di profilmu.</h2>
                              </section>
                        </main>

                        <section className='absolute w-full bottom-[61px] left-0 right-0 px-[30px] flex flex-col gap-y-6'>
                              <div className='relative z-[10]'>
                                    <Button link={'/steps/two'} type={'button'}>
                                          Continue
                                    </Button>
                              </div>
                              <Steps
                                    steps1={'bg-brand'}
                                    steps2={'bg-[#D9D9D9]'}
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
