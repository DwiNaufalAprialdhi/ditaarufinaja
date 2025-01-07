import Button from '@/components/material/Button'
import ButtonBorder from '@/components/material/ButtonBorder'
import Input from '@/components/material/Input'
import Steps from '@/components/material/Steps'
import HeaderMain from '@/components/ui/HeaderMain'
import ViewMobileMain from '@/components/ui/ViewMobileMain'
import React, { useState } from 'react'

export default function Nine() {
      const [workHistory, setWorkHistory] = useState([
            { name: '', place: '', birth: '' },
      ]);

      const addWorkHistory = () => {
            setWorkHistory([...workHistory, { name: '', place: '', birth: '' }]);
      };

      const removeWorkHistory = (index: number) => {
            const newWorkHistory = workHistory.filter((_, i) => i !== index);
            setWorkHistory(newWorkHistory);
            if (newWorkHistory.length === 0) {
            }
      };

      return (
            <>
                  <ViewMobileMain>
                        <main className='relative z-20'>
                              <HeaderMain link={'/steps/nine'} />

                              <section className='w-full mt-[50px]'>
                                    <h2 className='font-semibold text-[24px] leading-[24px] tracking-[-3%] text-brand text-center'>
                                          Biodatamu
                                    </h2>

                                    <form action="#" className='flex flex-col gap-y-[14px] mt-[50px]'>
                                          {workHistory.map((work, index) => (
                                                <div key={index} className="flex flex-col gap-y-[14px]">
                                                      <Input
                                                            htmlFor={`name${index}`}
                                                            label="Nama Lengkap"
                                                            type="text"
                                                            name={`name${index}`}
                                                            id={`name${index}`}
                                                            placeholder="Masukkan nama lengkap"
                                                            className="w-full"
                                                      />
                                                      <Input
                                                            htmlFor={`place${index}`}
                                                            label="Tempat Lahir"
                                                            type="text"
                                                            name={`place${index}`}
                                                            id={`place${index}`}
                                                            placeholder="Masukkan tempat lahir Anda"
                                                            className="w-full"
                                                      />
                                                      <Input
                                                            htmlFor={`birth${index}`}
                                                            label="Tanggal Lahir"
                                                            type="date"
                                                            name={`birth${index}`}
                                                            id={`birth${index}`}
                                                            placeholder="DD/MM/YYYY"
                                                            className="w-full"
                                                      />
                                                      {workHistory.length > 1 && (
                                                            <button
                                                                  type="button"
                                                                  onClick={() => removeWorkHistory(index)}
                                                                  className='w-max px-[15px] self-end'
                                                            >
                                                                  <h2 className='font-bold text-sm leading-[21px] tracking-[-3%] text-zinc-800 text-center'>
                                                                        - Hapus Riwayat
                                                                  </h2>
                                                            </button>
                                                      )}
                                                </div>
                                          ))}

                                          <button
                                                type="button"
                                                onClick={addWorkHistory}
                                                className='w-max py-[10px] px-[15px] self-end'
                                          >
                                                <h2 className='font-bold text-sm leading-[21px] tracking-[-3%] text-brand text-center'>
                                                      + Tambah Riwayat
                                                </h2>
                                          </button>
                                    </form>

                                    <section className='w-full flex flex-col gap-y-6 mt-[30px]'>
                                          <div className='relative z-[10] flex items-center justify-center gap-x-[14px]'>
                                                <Button link={'/steps/eleven'} type={'button'}>
                                                      Continue
                                                </Button>
                                                <ButtonBorder link={'/steps/eleven'} type={'button'} >
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


                              </section>
                        </main>
                  </ViewMobileMain>
            </>
      );
}
