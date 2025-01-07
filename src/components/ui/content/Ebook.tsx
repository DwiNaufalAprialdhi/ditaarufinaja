import ChevronRight from '@/components/icon/ChevronRight'
import Link from 'next/link'
import React from 'react'
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

type EbookProps = {
      link: string
      children?: React.ReactNode
}

export default function Ebook(props: EbookProps) {

      return (
            <>
                  <main className='w-full my-[50px]'>
                        <section className="w-full h-auto px-[30px] mb-[10px]">
                              <Link href={props.link} className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                          <h2 className="font-semibold text-sm leading-[21px]">E-Book</h2>
                                          <p className="font-normal text-xs leading-[18px] text-[#696969] w-full max-w-[300px] lg:max-w-[310px]">
                                                Baca Semua E-Book untuk mengakses fitur Ta’aruf
                                          </p>
                                    </div>
                                    <ChevronRight />
                              </Link>
                        </section>

                        <section className='w-full h-auto grid grid-cols-1 pl-[30px]'>
                              <Swiper
                                    slidesPerView={3.2}
                                    spaceBetween={10}
                                    pagination={{
                                          clickable: true,
                                    }}
                                    className="w-full col-span-1"
                              >
                                    {props.children}
                              </Swiper>
                        </section>
                  </main>
            </>
      )
}
