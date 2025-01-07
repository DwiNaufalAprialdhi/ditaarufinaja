import dynamic from 'next/dynamic';
import React from 'react';
import ViewMobileMap from '@/components/ui/ViewMobilleMap';
import HeaderMain from '@/components/ui/HeaderMain';
import Button from '@/components/material/Button';

// Dynamically import the Map component with SSR disabled
const Map = dynamic(() => import('@/components/ui/Map'), { ssr: false });

export default function Sixteen() {
      return (
            <>
                  <ViewMobileMap>
                        <section className='fixed top-[12px] inset-0 bg-transparent w-full h-max z-[999] max-w-[480px] mx-auto lg:px-[50px] px-5'>
                              <div className='p-[10px] rounded-[14px] bg-transparent'>
                                    <HeaderMain link={'/steps/fifteen'} />
                              </div>
                        </section>
                        <Map />
                        <section className='fixed bottom-[29px] left-0 right-0 max-w-[480px] mx-auto z-[999] bg-transparent w-full h-max lg:px-[30px] px-5'>
                              <div className='w-full h-max bg-white rounded-[14px] p-[10px]'>
                                    <Button className='w-full h-12 bg-brand text-white rounded-lg' link={'/steps/seventeen'}>Continue</Button>
                                    <p className='mt-[10px] text-xs leading-[18px] text-center text-[#9CA3AF]'>Jarak dapat diubah kembali pada menu Lokasi</p>
                              </div>
                        </section>
                  </ViewMobileMap>
            </>
      );
}
