import HeaderMain2 from '@/components/ui/HeaderMain2';
import ViewMobileFree from '@/components/ui/ViewMobileFree';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CardPlan from '@/components/ui/CardPlan';
import BenefitPlan from '@/components/material/BenefitPlan';
import Button from '@/components/material/Button';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Plan() {
      return (
            <>
                  <ViewMobileFree>
                        <main className="relative z-20">
                              <HeaderMain2
                                    link={'/steps/eighteen'}
                                    title={'Pick a Subscription'}
                                    className={'px-5 lg:px-[30px]'}
                              />

                              <section className="mt-[50px]">
                                    <h2 className="font-normal lg:px-[30px] px-5 text-sm leading-[28px] text-zinc-800 mb-2">
                                          Select Plan
                                    </h2>

                                    <div className="grid grid-cols-12">
                                          <Swiper
                                                slidesPerView={'auto'}
                                                centeredSlides={true}
                                                spaceBetween={10}
                                                breakpoints={{
                                                      320: { slidesPerView: 1.1, spaceBetween: 10 },
                                                      640: { slidesPerView: 1.1, spaceBetween: 10 },
                                                      768: { slidesPerView: 1.1, spaceBetween: 10 },
                                                      1024: { slidesPerView: 1.1, spaceBetween: 10 },
                                                }}
                                                pagination={{
                                                      clickable: true,
                                                }}
                                                modules={[Pagination]}
                                                className="mySwiper w-full col-span-12 cursor-pointer"
                                          >
                                                <SwiperSlide className="pb-10">
                                                      <CardPlan
                                                            category={'STARTED PLAN'}
                                                            title={'Silver Package'}
                                                            description={
                                                                  'Nikmati semua fitur dari aplikasi Jodoh Fii Sablillah selamanya tanpa batas waktu.'
                                                            }
                                                            price={'330.330'}
                                                      >
                                                            <BenefitPlan title={'30 Day Challenge'} />
                                                            <BenefitPlan title={'Akses preview other member'} />
                                                            <BenefitPlan title={'Pengajuan proses ta’aruf'} />
                                                            <div className="w-full">
                                                                  <Button link={'/steps/plan/detail-plan'}>
                                                                        Select This Plan
                                                                  </Button>
                                                            </div>
                                                      </CardPlan>
                                                </SwiperSlide>
                                                <SwiperSlide className="pb-10">
                                                      <CardPlan
                                                            category={'POPULAR PLAN'}
                                                            title={'Gold Package'}
                                                            description={
                                                                  'Nikmati semua fitur dari aplikasi Jodoh Fii Sablillah selamanya tanpa batas waktu.'
                                                            }
                                                            price={'440.440'}
                                                      >
                                                            <BenefitPlan title={'30 Day Challenge'} />
                                                            <BenefitPlan title={'Akses preview other member'} />
                                                            <BenefitPlan title={'Pengajuan proses ta’aruf'} />
                                                            <BenefitPlan
                                                                  title={'Buku/e-book: “Agar Pernikahanmu Tak Babak Belur”'}
                                                            />
                                                            <div className="w-full">
                                                                  <Button link={'/steps/plan/detail-plan'}>
                                                                        Select This Plan
                                                                  </Button>
                                                            </div>
                                                      </CardPlan>
                                                </SwiperSlide>
                                                <SwiperSlide className="pb-10">
                                                      <CardPlan
                                                            category={'BEST PLAN'}
                                                            title={'Gold Package'}
                                                            description={
                                                                  'Nikmati semua fitur dari aplikasi Jodoh Fii Sablillah selamanya tanpa batas waktu.'
                                                            }
                                                            price={'440.440'}
                                                      >
                                                            <BenefitPlan title={'30 Day Challenge'} />
                                                            <BenefitPlan title={'Akses preview other member'} />
                                                            <BenefitPlan title={'Pengajuan proses ta’aruf'} />
                                                            <BenefitPlan
                                                                  title={'Buku/e-book: “Agar Pernikahanmu Tak Babak Belur”'}
                                                            />
                                                            <div className="w-full">
                                                                  <Button link={'/steps/plan/detail-plan'}>
                                                                        Select This Plan
                                                                  </Button>
                                                            </div>
                                                      </CardPlan>
                                                </SwiperSlide>
                                          </Swiper>
                                    </div>
                              </section>

                              <section className="flex flex-col gap-y-[17px] lg:px-[30px] px-5">
                                    <Link
                                          href="#"
                                          className="font-normal text-xs leading-[18px] text-center underline text-gray-400"
                                    >
                                          Terms and Condition of use
                                    </Link>
                              </section>
                        </main>
                  </ViewMobileFree>
            </>
      );
}
