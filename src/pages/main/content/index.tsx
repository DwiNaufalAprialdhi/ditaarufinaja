/* eslint-disable @typescript-eslint/no-explicit-any */
import Dislike from '@/components/icon/Dislike'
import Filter from '@/components/icon/Filter'
import Like from '@/components/icon/Like'
import Match from '@/components/icon/Match'
import Action from '@/components/ui/content/Action'
import Heading from '@/components/ui/content/Heading'
import Navbar from '@/components/ui/content/Navbar'
import ViewMobile from '@/components/ui/ViewMobile'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MainContent from '@/components/ui/content/MainContent'

export default function Content() {

      const toMatch = () => {
            window.location.href = '/main/match'
      }

      return (
            <>
                  <ViewMobile>
                        <main className='relative w-full h-full min-h-screen'>

                              {/* Header */}
                              <Heading link={'/main/home'} title={'Discover'} subtitle={'Bogor'}>
                                    <Filter />
                              </Heading>

                              {/* Content */}
                              <section className='w-full h-[100vh] bg-black min-h-screen overflow-y-hidden grid grid-cols-1'>
                                    <Swiper
                                          direction={'vertical'}
                                          observer={true}
                                          observeParents={true}
                                          pagination={{
                                                clickable: true,
                                          }}
                                          className="mySwiper w-full h-full min-h-screen col-span-1 cursor-grab"
                                    >
                                          <SwiperSlide >
                                                <MainContent
                                                      image={'/assets/images/discover-1.jpeg'}
                                                      name={'Pay Murphy, 23'}
                                                      job={'Frontend Developer'}
                                                      description={'Hi, Nama saya Pay Murphy. Saya 23 tahun, sedang mencari pasangan yang baik hati'}
                                                />
                                          </SwiperSlide>
                                          <SwiperSlide >
                                                <MainContent
                                                      image={'/assets/images/discover-2.JPG'}
                                                      name={'Pay Murphy, 23'}
                                                      job={'Frontend Developer'}
                                                      description={'Hi, Nama saya Pay Murphy. Saya 23 tahun, sedang mencari pasangan yang baik hati'}
                                                />
                                          </SwiperSlide>
                                          <SwiperSlide >
                                                <MainContent
                                                      image={'/assets/images/discover-1.jpeg'}
                                                      name={'Pay Murphy, 23'}
                                                      job={'Frontend Developer'}
                                                      description={'Hi, Nama saya Pay Murphy. Saya 23 tahun, sedang mencari pasangan yang baik hati'}
                                                />
                                          </SwiperSlide>
                                    </Swiper>
                              </section>

                              {/* Action */}
                              <Action>
                                    <Dislike />
                                    <Match onClick={toMatch} />
                                    <Like />
                              </Action>

                              {/* Navbar */}
                              <Navbar />
                        </main>

                  </ViewMobile>
            </>
      )
}
