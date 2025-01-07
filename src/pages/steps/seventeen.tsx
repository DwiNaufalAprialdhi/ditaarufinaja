import Button from '@/components/material/Button'
import HeaderMain from '@/components/ui/HeaderMain'
import ViewMobileMain from '@/components/ui/ViewMobileMain'
import Image from 'next/image'
import React from 'react'

export default function Seventeen() {
      return (
            <>
                  <ViewMobileMain>
                        <main className='relative z-20'>
                              <HeaderMain link={'/steps/sixteen'} />

                              <section className='mt-[50px] text-zinc-800'>
                                    <Image src='/assets/images/bismillah.svg' width={200} height={50} alt='Bismillah' className='w-[200px] h-max object-contain mx-auto' />
                                    <h2 className='font-semibold text-[24px] leading-[24px] text-center mt-[50px]'>Ahlan Wa Sahlan Upay!</h2>
                                    <p className='mt-[24px] font-normal text-sm leading-[21px] text-center'>
                                          Selamat Datang di komunitas Jodoh Fi Sabilillah.
                                          Para pengguna sekalian diharapkan mematuhi aturan dan tata cara yang berlaku sesuai dengan petunjuk kami yang sesuai dengan Syariat Islam.
                                    </p>
                                    <p className='mt-[24px] font-semibold text-sm leading-[21px] text-center'>Apabila terdapat perilaku yang dilakukan tidak pantas dan tidak sesuai dengan peraturan, maka akan kami tindak lanjuti dengan pemblokiran permanen.</p>
                              </section>

                              <section className='mt-[122px] flex flex-col gap-y-[17px]'>
                                    <Button link={'/steps/eighteen'}>Continue</Button>
                                    <p className='font-normal text-xs leading-[18px] text-center text-gray-400'>Dengan melanjutkan, berarti Anda mengetahui <span className='font-bold'>Ketentuan</span> dan <span className='font-bold'>Kebijakan Privasi</span> kami</p>
                              </section>
                        </main>
                  </ViewMobileMain>
            </>
      )
}
