import Button from '@/components/material/Button'
import Input from '@/components/material/Input'
import Steps from '@/components/material/Steps'
import HeaderMain from '@/components/ui/HeaderMain'
import ViewMobileMain from '@/components/ui/ViewMobileMain'
import React, { useState } from 'react'

export default function Six() {
      const [workHistory, setWorkHistory] = useState([
            { institution: '', start: '', end: '', reason: '' },
      ]);

      const addWorkHistory = () => {
            setWorkHistory([...workHistory, { institution: '', start: '', end: '', reason: '' }]);
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
                              <HeaderMain link={'/steps/five'} />

                              <section className='w-full mt-[50px]'>
                                    <h2 className='font-semibold text-[24px] leading-[24px] tracking-[-3%] text-brand text-center'>
                                          Riwayat Pekerjaan
                                    </h2>

                                    <form action="#" className='flex flex-col gap-y-[14px] mt-[50px]'>
                                          {workHistory.map((work, index) => (
                                                <div key={index} className="flex flex-col gap-y-[14px]">
                                                      <Input
                                                            htmlFor={`institution-${index}`}
                                                            label="Nama Instansi"
                                                            type="text"
                                                            name={`institution-${index}`}
                                                            id={`institution-${index}`}
                                                            placeholder="Masukkan nama instansi"
                                                            className="w-full"
                                                      />
                                                      <div className='w-full grid grid-cols-2 gap-x-2'>
                                                            <Input
                                                                  htmlFor={`start-${index}`}
                                                                  label="Periode"
                                                                  type="date"
                                                                  name={`start-${index}`}
                                                                  id={`start-${index}`}
                                                                  className="w-full col-span-1"
                                                                  placeholder="2019"
                                                            />
                                                            <Input
                                                                  htmlFor={`end-${index}`}
                                                                  label="Selesai"
                                                                  classNameLabel='opacity-0'
                                                                  type="date"
                                                                  name={`end-${index}`}
                                                                  id={`end-${index}`}
                                                                  className="w-full col-span-1"
                                                                  placeholder="2020"
                                                            />
                                                      </div>
                                                      <Input
                                                            htmlFor={`reason-${index}`}
                                                            label="Keterangan (optional)"
                                                            type="text"
                                                            name={`reason-${index}`}
                                                            id={`reason-${index}`}
                                                            placeholder="Karyawan teladan"
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
                                          <div className='relative z-[10]'>
                                                <Button link={'/steps/seven'} type={'button'}>
                                                      Continue
                                                </Button>
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