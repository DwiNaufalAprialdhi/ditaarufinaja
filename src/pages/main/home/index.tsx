/* eslint-disable react-hooks/rules-of-hooks */
import ChevronRight from '@/components/icon/ChevronRight'
import IconTarget from '@/components/icon/IconTarget'
import CardLock from '@/components/material/CardLock'
import CardEbook from '@/components/ui/CardEbook'
import Banner from '@/components/ui/content/Banner'
import DailyActivity from '@/components/ui/content/DailyActivity'
import Ebook from '@/components/ui/content/Ebook'
import Navbar from '@/components/ui/content/Navbar'
import Profile from '@/components/ui/content/Profile'
import WhatsNew from '@/components/ui/content/WhatsNew'
import ItemWhatsNew from '@/components/ui/ItemWhatsNew'
import ViewMobile from '@/components/ui/ViewMobile'
import Image from 'next/image'
import React, { useRef } from 'react'
import { SwiperSlide } from 'swiper/react';

// Data Dummy
const daysData = Array.from({ length: 30 }, (_, index) => ({
      id: index + 1,
      status: index % 3 === 0 ? 'beres' : 'tidak beres', // Contoh status "beres" untuk setiap kelipatan 3
      currentDay: index + 1 === new Date().getDate(), // Tandai hari ini
}));

export default function index() {
      const scrollContainerRef = useRef<HTMLDivElement>(null);

      const handleScroll = (direction: string) => {
            if (scrollContainerRef.current) {
                  const scrollAmount = direction === 'next' ? 100 : -100; // Scroll by 100px
                  scrollContainerRef.current.scrollBy({
                        left: scrollAmount,
                        behavior: 'smooth',
                  });
            }
      };
      return (
            <>
                  <ViewMobile>
                        <main className='w-full min-h-screen relative z-20'>

                              {/* Profile */}
                              <Profile
                                    className={'pt-[30px] pb-[24px] px-[30px]'}
                                    images={'/assets/images/discover-1.jpeg'}
                                    name={'Dwi Naufal Aprialdhi'}
                                    job={'Frontend Dev'}
                              />

                              {/* Banner */}
                              <Banner className='mb-[30px]'>
                                    <SwiperSlide className='pb-7'>
                                          <div className='w-full h-[160px]'>
                                                <Image src='/assets/images/banner-1.svg' alt='banner' width={390} height={160} className='w-full h-full object-cover' />
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='pb-7'>
                                          <div className='w-full h-[160px]'>
                                                <Image src='/assets/images/banner-1.svg' alt='banner' width={390} height={160} className='w-full h-full object-cover' />
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='pb-7'>
                                          <div className='w-full h-[160px]'>
                                                <Image src='/assets/images/banner-1.svg' alt='banner' width={390} height={160} className='w-full h-full object-cover' />
                                          </div>
                                    </SwiperSlide>
                              </Banner>

                              {/* Daily Activity */}
                              <DailyActivity link="#">
                                    <section className="w-full h-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1">
                                          <div className="bg-white rounded-[15px] py-4 px-[10px] flex flex-col gap-y-[14px] shadow-md border border-black/5 relative w-full col-span-1 overflow-hidden">
                                                {/* Buttons */}
                                                <div className="absolute top-[24px] left-[10px]">
                                                      <button onClick={() => handleScroll('prev')}>
                                                            <ChevronRight className="w-[18px] h-auto transform rotate-180" />
                                                      </button>
                                                </div>
                                                <div className="absolute top-[24px] right-[10px]">
                                                      <button onClick={() => handleScroll('next')}>
                                                            <ChevronRight className="w-[18px] h-auto" />
                                                      </button>
                                                </div>

                                                {/* Scrollable Content */}
                                                <div
                                                      ref={scrollContainerRef}
                                                      className="flex flex-row overflow-x-auto w-full max-w-[90%] h-auto mx-auto scrollbar-hide space-x-2"
                                                >
                                                      {daysData.map((day) => {
                                                            let bgColor = 'bg-white'; // Default background
                                                            if (day.status === 'beres') bgColor = 'bg-[#34C759] text-white';
                                                            if (day.currentDay) bgColor = 'bg-[#EB4853] text-white';

                                                            return (
                                                                  <div
                                                                        key={day.id}
                                                                        className={`${bgColor} flex-shrink-0 min-w-[30px] min-h-[30px] flex items-center justify-center rounded-full`}
                                                                  >
                                                                        <h2 className="font-medium text-xs leading-[24px] text-center">{day.id}</h2>
                                                                  </div>
                                                            );
                                                      })}
                                                </div>

                                                {/* Reminder */}
                                                <div className="w-full p-2 bg-slate-200 rounded-[8px] flex items-center gap-x-2">
                                                      <IconTarget className="w-[30px] h-[30px]" />
                                                      <div className="flex flex-col">
                                                            <h2 className="font-medium text-xs leading-[18px]">Selesaikan Daily Activity harian-Mu</h2>
                                                            <p className="font-normal text-[10px] leading-[15px] text-gray-400">
                                                                  Jangan sampai ketinggalan mengisi target untuk meningkatkan nilai harian-Mu
                                                            </p>
                                                      </div>
                                                </div>
                                          </div>
                                    </section>
                              </DailyActivity>


                              {/* E-Book */}
                              <Ebook link='#' >
                                    <SwiperSlide>
                                          <CardEbook
                                                link='#'
                                                images='/assets/images/banner-1.svg'
                                                title={'Part 1: Jodoh Fi Sabilillah'}
                                                name={'Luky B. Rouf'}
                                          />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <CardEbook
                                                link='#'
                                                images='/assets/images/banner-1.svg'
                                                title={'Part 1: Jodoh Fi Sabilillah'}
                                                name={'Luky B. Rouf'}
                                          >
                                                <CardLock />
                                          </CardEbook>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <CardEbook
                                                link='#'
                                                images='/assets/images/banner-1.svg'
                                                title={'Part 1: Jodoh Fi Sabilillah'}
                                                name={'Luky B. Rouf'}
                                          >
                                                <CardLock />
                                          </CardEbook>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                          <CardEbook
                                                link='#'
                                                images='/assets/images/banner-1.svg'
                                                title={'Part 1: Jodoh Fi Sabilillah'}
                                                name={'Luky B. Rouf'}
                                          >
                                                <CardLock />
                                          </CardEbook>
                                    </SwiperSlide>
                              </Ebook>

                              {/* Whats New */}
                              <WhatsNew>
                                    {Array.from({ length: 3 }).map((_, index) => (
                                          <ItemWhatsNew
                                                key={index}
                                                link='#'
                                                images='/assets/images/banner-1.svg'
                                                title='Remaja di Blitar menikahi 4 gadis
                                                sekaligus!'
                                                like='14'
                                                watch='1K'
                                                category='news'
                                                date='2 hari lalu'
                                          />
                                    ))}
                              </WhatsNew>

                        </main>

                        {/* Navbar */}
                        <Navbar className='bg-white' />
                  </ViewMobile>
            </>
      )
}
