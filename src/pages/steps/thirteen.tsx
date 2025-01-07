import Button from '@/components/material/Button'
import ButtonBorder from '@/components/material/ButtonBorder'
import Steps from '@/components/material/Steps'
import HeaderMain from '@/components/ui/HeaderMain'
import ViewMobileMain from '@/components/ui/ViewMobileMain'
import Image from 'next/image'
import React from 'react'

export default function Thirteen() {
      return (
            <>
                  <ViewMobileMain>
                        <main className='relative z-[20]'>
                              <HeaderMain link={'/steps/twelve'} />

                              <section className='mt-[50px] flex flex-col'>
                                    <h2 className='font-semibold text-[24px] leading-[24px] tracking-[-3%] text-brand text-center'>
                                          Kondisi Keuangan Anda
                                    </h2>

                                    <Image src={'/assets/icon/wallet.svg'} alt='person' width={150} height={150} className='w-[150px] h-[150px] object-contain mt-[50px] mx-auto' />

                                    <div className='flex flex-col gap-y-[14px] mt-[50px]'>
                                          <div className='flex items-center justify-between py-2 px-[10px]'>
                                                <label htmlFor="status" className='font-medium text-base leading-[24px]'>Mandiri/ Mapan</label>
                                                <div className='relative'>
                                                      <input type="radio" name="status" id="status" className='absolute top-0 right-0 w-5 h-5 opacity-0 cursor-pointer peer' />
                                                      <div className='bg-transparent border-2 border-[#D9D9D9] w-[20px] h-[20px] rounded-full peer-checked:bg-brand'></div>
                                                </div>
                                          </div>
                                          <div className='flex items-center justify-between py-2 px-[10px]'>
                                                <label htmlFor="status" className='font-medium text-base leading-[24px]'>Ditanggung Pasangan</label>
                                                <div className='relative'>
                                                      <input type="radio" name="status" id="status" className='absolute top-0 right-0 w-5 h-5 opacity-0 cursor-pointer peer' />
                                                      <div className='bg-transparent border-2 border-[#D9D9D9] w-[20px] h-[20px] rounded-full peer-checked:bg-brand'></div>
                                                </div>
                                          </div>
                                          <div className='flex items-center justify-between py-2 px-[10px]'>
                                                <label htmlFor="status" className='font-medium text-base leading-[24px]'>Ditanggung Orangtua</label>
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
                                    </div>
                              </section>
                              <section className='w-full flex flex-col gap-y-6 mt-[81px]'>
                                    <div className='relative z-[10] flex items-center justify-center gap-x-[14px]'>
                                          <Button link={'/steps/fourteen'} type={'button'}>
                                                Continue
                                          </Button>
                                          <ButtonBorder link={'/steps/fourteen'} type={'button'} >
                                                Skip
                                          </ButtonBorder>
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
                        </main>
                  </ViewMobileMain>
            </>
      )
}
