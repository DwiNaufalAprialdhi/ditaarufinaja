/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

type Props = {
      className?: string
      children?: React.ReactNode
}
export default function Banner(props: Props) {
      return (
            <>
                  <section className={`w-full h-auto grid grid-cols-1 ${props.className}`}>
                        <Swiper
                              pagination={{ clickable: true }}
                              autoplay={{
                                    delay: 3000, // Waktu delay dalam milidetik (3 detik)
                                    disableOnInteraction: false, // Tetap autoplay setelah interaksi
                              }}
                              modules={[Pagination, Autoplay]}
                              className="mySwiper w-full h-auto col-span-1 cursor-grab"
                        >
                              {props.children}
                        </Swiper>
                  </section>
            </>
      )
}
