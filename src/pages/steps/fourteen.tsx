/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from '@/components/material/Button'
import ButtonBorder from '@/components/material/ButtonBorder'
import Steps from '@/components/material/Steps'
import Tags from '@/components/material/Tags'
import HeaderMain from '@/components/ui/HeaderMain'
import ViewMobileMain from '@/components/ui/ViewMobileMain'
import React, { useState } from 'react'

const islami = [{ id: 1, name: 'Asyura' }, { id: 2, name: 'Amal' }, { id: 3, name: 'Haji' }, { id: 4, name: 'Umroh' }, { id: 5, name: 'Doa' }, { id: 6, name: 'Puasa' }, { id: 7, name: 'Khatam' }, { id: 8, name: 'Qurban' }]

const olahraga = [{ id: 1, name: 'Sepak Bola' }, { id: 2, name: 'Basket' }, { id: 3, name: 'Badminton' }, { id: 4, name: 'Renang' }, { id: 5, name: 'Jogging' }, { id: 6, name: 'Futsal' }, { id: 7, name: 'Bulu Tangkis' }, { id: 8, name: 'Voli' }]

const senibudaya = [{ id: 1, name: 'Tari' }, { id: 2, name: 'Teater' }, { id: 3, name: 'Seni Lukis' }, { id: 4, name: 'Seni Rupa' }, { id: 5, name: 'Seni Musik' }, { id: 6, name: 'Seni Tari' }, { id: 7, name: 'Seni Teater' }, { id: 8, name: 'Seni Rupa' }]

const makananminuman = [{ id: 1, name: 'Kopi' }, { id: 2, name: 'Teh' }, { id: 3, name: 'Susu' }, { id: 4, name: 'Jus' }, { id: 5, name: 'Makanan Ringan' }, { id: 6, name: 'Makanan Berat' }, { id: 7, name: 'Makanan Sehat' }, { id: 8, name: 'Makanan Diet' }]

export default function Fourteen() {

      const [selectedItemsIslami, setSelectedItemsIslami] = useState<number[]>([]);
      const toggleSelectIslami = (id: number): void => {
            setSelectedItemsIslami((prevSelected: number[]) =>
                  prevSelected.includes(id)
                        ? prevSelected.filter((itemId: number) => itemId !== id)
                        : [...prevSelected, id]
            );

      };

      const [selectedItemsOlahraga, setSelectedItemsOlahraga] = useState<number[]>([]);
      const toggleSelectOlahraga = (id: number): void => {
            setSelectedItemsOlahraga((prevSelected: number[]) =>
                  prevSelected.includes(id)
                        ? prevSelected.filter((itemId: number) => itemId !== id)
                        : [...prevSelected, id]
            );
      };

      const [selectedItemsSeniBudaya, setSelectedItemsSeniBudaya] = useState<number[]>([]);
      const toggleSelectSeniBudaya = (id: number): void => {
            setSelectedItemsSeniBudaya((prevSelected: number[]) =>
                  prevSelected.includes(id)
                        ? prevSelected.filter((itemId: number) => itemId !== id)
                        : [...prevSelected, id]
            );
      };

      const [selectedItemsMakananMinuman, setSelectedItemsMakananMinuman] = useState<number[]>([]);
      const toggleSelectMakananMinuman = (id: number): void => {
            setSelectedItemsMakananMinuman((prevSelected: number[]) =>
                  prevSelected.includes(id)
                        ? prevSelected.filter((itemId: number) => itemId !== id)
                        : [...prevSelected, id]
            );
      };

      return (
            <>
                  <ViewMobileMain>
                        <main className='relative z-[20]'>
                              <HeaderMain link={'/steps/thirteen'} />

                              <section className='mt-[50px] flex flex-col'>
                                    <h2 className='font-semibold text-[24px] leading-[24px] tracking-[-3%] text-brand text-center'>
                                          Hobby dan Minat Anda
                                    </h2>

                                    <p className='font-normal text-xs leading-[18px] text-center text-zinc-800 mt-[14px]'>
                                          Pilih minimal 5 hobby dan minat agar lebih spesifik
                                    </p>

                              </section>

                              <section className='mt-[50px] flex flex-col gap-y-[14px]'>
                                    <h2 className='font-medium text-base leading-[24px] text-zinc-800'>Islami</h2>
                                    <div className='flex flex-wrap gap-[10px]'>
                                          {islami.map((item, index) => (
                                                <Tags key={index} className={`${selectedItemsIslami.includes(item.id) ? 'bg-brand text-white' : 'bg-transparent'
                                                      }`}
                                                      onClick={() => toggleSelectIslami(item.id)}>
                                                      <h2 className='font-medium text-xs leading-[18px] tracking-[-3%] text-center'>{item.name}</h2>
                                                </Tags>
                                          ))}
                                    </div>
                              </section>

                              <section className='mt-[20px] flex flex-col gap-y-[14px]'>
                                    <h2 className='font-medium text-base leading-[24px] text-zinc-800'>Olahraga</h2>
                                    <div className='flex flex-wrap gap-[10px]'>
                                          {olahraga.map((item, index) => (
                                                <Tags key={index} className={`${selectedItemsOlahraga.includes(item.id) ? 'bg-brand text-white' : 'bg-transparent'
                                                      }`}
                                                      onClick={() => toggleSelectOlahraga(item.id)}>
                                                      <h2 className='font-medium text-xs leading-[18px] tracking-[-3%] text-center'>{item.name}</h2>
                                                </Tags>
                                          ))}
                                    </div>
                              </section>

                              <section className='mt-[20px] flex flex-col gap-y-[14px]'>
                                    <h2 className='font-medium text-base leading-[24px] text-zinc-800'>Seni & Budaya</h2>
                                    <div className='flex flex-wrap gap-[10px]'>
                                          {senibudaya.map((item, index) => (
                                                <Tags key={index} className={`${selectedItemsSeniBudaya.includes(item.id) ? 'bg-brand text-white' : 'bg-transparent'
                                                      }`}
                                                      onClick={() => toggleSelectSeniBudaya(item.id)}>
                                                      <h2 className='font-medium text-xs leading-[18px] tracking-[-3%] text-center'>{item.name}</h2>
                                                </Tags>
                                          ))}
                                    </div>
                              </section>

                              <section className='mt-[20px] flex flex-col gap-y-[14px]'>
                                    <h2 className='font-medium text-base leading-[24px] text-zinc-800'>Makanan & Minuman</h2>
                                    <div className='flex flex-wrap gap-[10px]'>
                                          {makananminuman.map((item, index) => (
                                                <Tags key={index} className={`${selectedItemsMakananMinuman.includes(item.id) ? 'bg-brand text-white' : 'bg-transparent'
                                                      }`}
                                                      onClick={() => toggleSelectMakananMinuman(item.id)}>
                                                      <h2 className='font-medium text-xs leading-[18px] tracking-[-3%] text-center'>{item.name}</h2>
                                                </Tags>
                                          ))}
                                    </div>
                              </section>

                              <section className='mt-[20px] flex flex-col'>
                                    <label htmlFor="more" className='font-medium text-base leading-[24px] text-zinc-800'>Lainnya</label>
                                    <input type="text" name='more' id='more' className='bg-transparent border-b border-zinc-800 outline-none w-full text-xs font-normal text-zinc-800 leading-[18px] py-[11px] mb-[14px]' placeholder='Masukkan minat dan hobby Anda' />
                              </section>

                              <section className='w-full flex flex-col gap-y-6 mt-[81px]'>
                                    <div className='relative z-[10] flex items-center justify-center gap-x-[14px]'>
                                          <Button link={'/steps/fifteen'} type={'button'}>
                                                Continue
                                          </Button>
                                          <ButtonBorder disabled={true} link={'/steps/fifteen'} type={'button'} >
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
