import BenefitPlan from '@/components/material/BenefitPlan'
import Button from '@/components/material/Button'
import CardPlanDetail from '@/components/ui/CardPlanDetail'
import HeaderMain2 from '@/components/ui/HeaderMain2'
import ViewMobileMain from '@/components/ui/ViewMobileMain'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function DetailPlan() {
      return (
            <>
                  <ViewMobileMain>
                        <main className='relative z-20'>
                              <HeaderMain2 link={'/steps/plan'} title={'Detail Plan'} />

                              <section className='mt-[24px] mb-[38px]'>
                                    <CardPlanDetail
                                          title={'Gold Package'}
                                          description={'Nikmati semua fitur dari aplikasi Jodoh Fii Sablillah selamanya tanpa batas waktu.'}
                                          price={'440.440'}
                                    >
                                          <BenefitPlan title={'30 Day Challenge'} />
                                          <BenefitPlan title={'Akses preview other member'} />
                                          <BenefitPlan title={'Pengajuan proses ta’aruf'} />
                                          <BenefitPlan title={'Buku/e-book: “Agar Pernikahanmu Tak Babak Belur”'} />
                                    </CardPlanDetail>
                              </section>

                              <section className='flex flex-col gap-y-[14px]'>
                                    <div className='flex items-center justify-between py-2 px-[10px] border-b border-[#D9D9D9] cursor-pointer hover:border-brand duration-200 group'>
                                          <h2 className='font-medium text-base leading-[24px] group-hover:text-brand'>Metode Pembayaran</h2>
                                          <svg className='w-[9px] h-max text-zinc-800 group-hover:text-brand duration-200' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                          </svg>
                                    </div>
                                    <div className='flex items-center justify-between py-2'>
                                          <div className='flex items-center gap-x-[10px]'>
                                                <Image src='/assets/icon/icon-gopay.svg' alt='icon' width={66} height={24} className='w-[66px] h-auto object-cover' />
                                                <label htmlFor="wallet" className='font-normal text-xs leading-[18px] text-zinc-800'>Gopay</label>
                                          </div>
                                          <div className='relative'>
                                                <input type="radio" name="wallet" id="wallet" className='absolute top-0 right-0 w-5 h-5 opacity-0 cursor-pointer peer' />
                                                <div className='bg-transparent border-2 border-[#D9D9D9] w-[20px] h-[20px] rounded-full peer-checked:bg-brand'></div>
                                          </div>
                                    </div>
                                    <div className='flex items-center justify-between py-2'>
                                          <div className='flex items-center gap-x-[10px]'>
                                                <Image src='/assets/icon/icon-qris.svg' alt='icon' width={66} height={24} className='w-[66px] h-auto object-cover' />
                                                <label htmlFor="wallet" className='font-normal text-xs leading-[18px] text-zinc-800'>QRIS</label>
                                          </div>
                                          <div className='relative'>
                                                <input type="radio" name="wallet" id="wallet" className='absolute top-0 right-0 w-5 h-5 opacity-0 cursor-pointer peer' />
                                                <div className='bg-transparent border-2 border-[#D9D9D9] w-[20px] h-[20px] rounded-full peer-checked:bg-brand'></div>
                                          </div>
                                    </div>
                              </section>

                              <section className='mt-[38px] flex flex-col gap-y-[17px]'>
                                    <Button link={'#'} >Pay Now</Button>
                                    <Link href='#' className='font-normal text-xs leading-[18px] text-center underline text-gray-400'>Terms and Condition of use</Link>
                              </section>
                        </main>
                  </ViewMobileMain>
            </>
      )
}
