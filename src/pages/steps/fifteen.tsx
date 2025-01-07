import Button from '@/components/material/Button'
import ButtonBorder from '@/components/material/ButtonBorder'
import Input from '@/components/material/Input'
import Steps from '@/components/material/Steps'
import HeaderMain from '@/components/ui/HeaderMain'
import ViewMobileMain from '@/components/ui/ViewMobileMain'
import React from 'react'

export default function Fifteen() {
      return (
            <>
                  <ViewMobileMain>
                        <main className='relative z-20'>
                              <HeaderMain link={'/steps/fourteen'} />

                              <section className='mt-[50px]'>
                                    <h2 className='font-semibold text-[24px] leading-[24px] tracking-[-3%] text-brand text-center'>
                                          Harapan dalam Pernikahan
                                    </h2>
                              </section>

                              <section className='mt-[50px]'>
                                    <form action="#" className='flex flex-col gap-y-[14px]'>
                                          <Input
                                                htmlFor={'visi'}
                                                label={'Visi'}
                                                type={'text'}
                                                name={'visi'}
                                                id={'visi'}
                                                placeholder={'Masukkan visi pernikahanmu'}
                                          />
                                          <Input
                                                htmlFor={'misi'}
                                                label={'Misi'}
                                                type={'text'}
                                                name={'misi'}
                                                id={'misi'}
                                                placeholder={'Masukkan misi pernikahanmu'}
                                          />
                                          <Input
                                                htmlFor={'plan'}
                                                label={'Rencana Menikah'}
                                                type={'text'}
                                                name={'plan'}
                                                id={'plan'}
                                                placeholder={'Masukkan rencana pernikahanmu'}
                                          />
                                          <Input
                                                htmlFor={'more'}
                                                label={'Keterangan Lainnya'}
                                                type={'text'}
                                                name={'more'}
                                                id={'more'}
                                                placeholder={'Masukkan keterangan lainnya'}
                                          />
                                    </form>
                              </section>

                              <section className='w-full flex flex-col gap-y-6 lg:mt-[175px] mt-[50px]'>
                                    <div className='relative z-[10] flex items-center justify-center gap-x-[14px]'>
                                          <Button link={'/steps/sixteen'} type={'button'}>
                                                Continue
                                          </Button>
                                          <ButtonBorder link={'/steps/sixteen'} type={'button'} >
                                                Skip
                                          </ButtonBorder>
                                    </div>
                                    <Steps
                                          steps1={'bg-[#D9D9D9]'}
                                          steps2={'bg-[#D9D9D9]'}
                                          steps3={'bg-[#D9D9D9]'}
                                          steps4={'bg-[#D9D9D9]'}
                                          steps5={'bg-[#D9D9D9]'}
                                          steps6={'bg-brand'}
                                    />
                              </section>
                        </main>
                  </ViewMobileMain>
            </>
      )
}
