import Button from '@/components/material/Button'
import HeaderMain from '@/components/ui/HeaderMain'
import Plan from '@/components/ui/Plan'
import ViewMobileMain from '@/components/ui/ViewMobileMain'
import React from 'react'

export default function Eighteen() {
      return (
            <>
                  <ViewMobileMain>
                        <main className='relative z-20'>
                              <HeaderMain link={'/steps/seventeen'} />

                              <section className='flex flex-col gap-y-[10px] mt-[50px]'>
                                    <h2 className='font-semibold text-[24px] leading-[28px] text-center text-brand'>Temukan Jodoh Fi Sabilillah Impianmu di Sini</h2>
                                    <p className='font-normal text-sm leading-[21px] text-[#8E8E93] text-center'>Bergabunglah dengan komunitas muslim yang solid dan temukan pasangan hidup yang sehati sejiwa</p>
                              </section>

                              <section className='flex flex-col gap-y-[24px] mt-[40px]'>
                                    <Plan
                                          icon={'/assets/icon/icon-plan1.svg'}
                                          title={'Akses Semua Fitur Selamanya'}
                                          description={'Dapatkan semua akses dan juga fitur ta’aruf selamanya tanpa jangka waktu.'}
                                    />
                                    <Plan
                                          icon={'/assets/icon/icon-plan2.svg'}
                                          title={'Ditemani oleh Pakar Professional'}
                                          description={'Ditemani oleh para Asatidz dan juga pakar professional yang akan membantumu untuk mempersiapkan bekal sebelum menikah.'}
                                    />
                                    <Plan
                                          icon={'/assets/icon/icon-plan3.svg'}
                                          title={'Bimbingan Ta’aruf sampai Akad'}
                                          description={'Bimbingan eksklusif dari Pra-Ta’aruf hingga akad dengan calon pilihanmu.'}
                                    />
                                    <Plan
                                          icon={'/assets/icon/icon-plan3.svg'}
                                          title={'Free 30+ E-Book'}
                                          description={'Dapatkan 30+ E-Book gratis yang bisa kamu baca untuk menambah wawasan dan ilmu sebelum menikah.'}
                                    />
                              </section>

                              <section className='mt-[50px] flex flex-col gap-y-[17px]'>
                                    <Button
                                          link={'/steps/plan'}
                                    >
                                          Show Plan
                                    </Button>
                                    <p className='font-normal text-xs leading-[18px] text-center text-brand_grey_text'>Terms and Condition of use</p>
                              </section>
                        </main>
                  </ViewMobileMain>
            </>
      )
}
