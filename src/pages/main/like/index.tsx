/* eslint-disable @typescript-eslint/no-unused-vars */
import IconDislike from '@/components/icon/IconDislike'
import IconLike from '@/components/icon/IconLike'
import CardLike from '@/components/material/CardLike'
import Navbar from '@/components/ui/content/Navbar'
import ViewMobile from '@/components/ui/ViewMobile'
import React from 'react'

export default function Like() {
      return (
            <>
                  <ViewMobile>
                        <main className='w-full pt-[48px] pb-[60px] px-[30px] min-h-screen'>

                              <section className='flex flex-col gap-y-[10px]'>
                                    <h2 className='font-semibold text-2xl leading-[24px] text-center text-brand tracking-[-3%]'>Lihat yang menyukai Anda</h2>
                                    <p className='foont-normal text-sm leading-[21px] text-[#1E1E1E] text-center'>Sukai balik untuk memulai Ta’aruf sekarang </p>
                              </section>

                              <section className='px-[15px] w-full grid grid-cols-2 gap-[15px] mt-[25px] mb-[15px]'>
                                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                                          <CardLike key={index} images={'/assets/images/discover-1.jpeg'} name={'Pay, 22'}  >
                                                <div className="grid grid-cols-2 w-full h-auto bg-black/10 backdrop-blur-sm rounded-b-[15px] overflow-hidden">
                                                      <button className='w-full flex items-center justify-center py-[10px] border-r border-white'>
                                                            <IconDislike className='col-span-1' />
                                                      </button>
                                                      <button className='w-full flex items-center justify-center py-[10px]'>
                                                            <IconLike className='col-span-1' />
                                                      </button>
                                                </div>
                                          </CardLike>
                                    ))}
                              </section>

                              <section className='px-[15px] w-full grid grid-cols-3 gap-x-[10px] items-center'>
                                    <div className='w-full h-[1px] bg-[#E8E6EA] rounded-full'></div>
                                    <h2 className='font-normal text-xs leading-[18px] text-center'>Yesterday</h2>
                                    <div className='w-full h-[1px] bg-[#E8E6EA] rounded-full'></div>
                              </section>

                              <section className='px-[15px] w-full grid grid-cols-2 gap-[15px] mt-[15px]'>
                                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                                          <CardLike key={index} images={'/assets/images/discover-1.jpeg'} name={'Pay, 22'}  >
                                                <div className="grid grid-cols-2 w-full h-auto bg-black/10 backdrop-blur-sm rounded-b-[15px] overflow-hidden">
                                                      <button className='w-full flex items-center justify-center py-[10px] border-r border-white'>
                                                            <IconDislike className='col-span-1' />
                                                      </button>
                                                      <button className='w-full flex items-center justify-center py-[10px]'>
                                                            <IconLike className='col-span-1' />
                                                      </button>
                                                </div>
                                          </CardLike>
                                    ))}
                              </section>
                        </main>

                        {/* Kondisi Jika Tidak Ada Data */}
                        {/* <main className='relative z-20 flex flex-col items-center justify-center w-full h-full min-h-screen px-[30px]'>
                              <h2 className='font-semibold text-2xl leading-[24px] tracking-[-3%] text-center text-brand mb-[14px]'>Belum ada yang menyukai</h2>
                              <p className='font-normal text-xs leading-[18px] tracking-[-3%] text-center'>Mulai Ta’aruf sekarang dengan Sukai untuk memulai Ta’aruf sekarang
                              </p>
                        </main> */}
                        {/* Navbar */}
                        <Navbar className='bg-white' />
                  </ViewMobile>
            </>
      )
}
