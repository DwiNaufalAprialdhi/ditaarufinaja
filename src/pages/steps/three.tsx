/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '@/components/material/Button'
import Steps from '@/components/material/Steps'
import HeaderMain from '@/components/ui/HeaderMain'
import ViewMobileMain from '@/components/ui/ViewMobileMain'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';

export default function Three() {

      const [displayOutside, setDisplayOutside] = useState(false)
      const [displayInside, setDisplayInside] = useState(false)
      const prepareRef = useRef<HTMLDivElement>(null)
      const displayInsideRef = useRef<HTMLDivElement>(null)
      const [isDraggingPrepare, setIsDraggingPrepare] = useState(false);

      const [displayOutsideYear, setDisplayOutsideYear] = useState(false)
      const [displayInsideYear, setDisplayInsideYear] = useState(false)
      const yearRef = useRef<HTMLDivElement>(null)
      const displayInsideYearRef = useRef<HTMLDivElement>(null)
      const [isDraggingYear, setIsDraggingYear] = useState(false);

      const [year, setYear] = useState(2024); // Initialize year with 2024

      const handlePrevYear = () => {
            if (year > 2024) {
                  setYear((prevYear) => prevYear - 1); // Decrease the year by 1
            }
      };

      const handleNextYear = () => {
            setYear((prevYear) => prevYear + 1); // Increase the year by 1
      };


      const handlePrepare = () => {
            setDisplayOutside(true)
            setDisplayInside(true)
      }

      const handlePrepareClose = () => {
            setTimeout(() => {
                  setDisplayOutside(false)
            }, 300)
            setDisplayInside(false)
      }

      const handleYear = () => {
            setDisplayOutsideYear(true)
            setDisplayInsideYear(true)
      }

      const handleYearClose = () => {
            setTimeout(() => {
                  setDisplayOutsideYear(false)
            }, 300)
            setDisplayInsideYear(false)
      }

      // Click Outside Prepare
      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideRef.current && !displayInsideRef.current.contains(e.target as Node) && prepareRef.current && !prepareRef.current.contains(e.target as Node)) {
                        handlePrepareClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }

      }, [displayInsideRef, prepareRef])

      const handleDragEndPrepare = (_event: any, info: any) => {
            setIsDraggingPrepare(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 500;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handlePrepareClose();
            }
      };

      // Click Outside Year
      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideYearRef.current && !displayInsideYearRef.current.contains(e.target as Node) && yearRef.current && !yearRef.current.contains(e.target as Node)) {
                        handleYearClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }

      }, [displayInsideYearRef, yearRef])

      const handleDragEndYear = (_event: any, info: any) => {
            setIsDraggingYear(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 500;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleYearClose();
            }
      };

      return (
            <>
                  <ViewMobileMain>
                        <main className='relative z-[10]'>
                              <HeaderMain link={'/steps/two'} />

                              <section className='mt-[50px] flex flex-col gap-y-6'>
                                    <h2 className='font-semibold text-[24px] leading-[24px] tracking-[-3%] text-brand'>Status Pernikahanmu</h2>

                                    <div className='flex flex-col gap-y-[14px]'>
                                          <div className='flex items-center justify-between py-2 px-[10px]'>
                                                <label htmlFor="status" className='font-medium text-base leading-[24px]'>Lajang</label>
                                                <div className='relative'>
                                                      <input type="radio" name="status" id="status" className='absolute top-0 right-0 w-5 h-5 opacity-0 cursor-pointer peer' />
                                                      <div className='bg-transparent border-2 border-[#D9D9D9] w-[20px] h-[20px] rounded-full peer-checked:bg-brand'></div>
                                                </div>
                                          </div>
                                          <div className='flex items-center justify-between py-2 px-[10px]'>
                                                <label htmlFor="status" className='font-medium text-base leading-[24px]'>Menikah</label>
                                                <div className='relative'>
                                                      <input type="radio" name="status" id="status" className='absolute top-0 right-0 w-5 h-5 opacity-0 cursor-pointer peer' />
                                                      <div className='bg-transparent border-2 border-[#D9D9D9] w-[20px] h-[20px] rounded-full peer-checked:bg-brand'></div>
                                                </div>
                                          </div>
                                          <div className='flex items-center justify-between py-2 px-[10px]'>
                                                <label htmlFor="status" className='font-medium text-base leading-[24px]'>Cerai Hidup</label>
                                                <div className='relative'>
                                                      <input type="radio" name="status" id="status" className='absolute top-0 right-0 w-5 h-5 opacity-0 cursor-pointer peer' />
                                                      <div className='bg-transparent border-2 border-[#D9D9D9] w-[20px] h-[20px] rounded-full peer-checked:bg-brand'></div>
                                                </div>
                                          </div>
                                          <div className='flex items-center justify-between py-2 px-[10px]'>
                                                <label htmlFor="status" className='font-medium text-base leading-[24px]'>Cerai Mati</label>
                                                <div className='relative'>
                                                      <input type="radio" name="status" id="status" className='absolute top-0 right-0 w-5 h-5 opacity-0 cursor-pointer peer' />
                                                      <div className='bg-transparent border-2 border-[#D9D9D9] w-[20px] h-[20px] rounded-full peer-checked:bg-brand'></div>
                                                </div>
                                          </div>
                                          <div ref={prepareRef} onClick={handlePrepare} className='flex items-center justify-between py-2 px-[10px] border-b border-[#D9D9D9] cursor-pointer hover:border-brand duration-200 group'>
                                                <h2 className='font-medium text-base leading-[24px] group-hover:text-brand'>Kesiapan Menikah</h2>
                                                <svg className='w-[9px] h-max text-zinc-800 group-hover:text-brand duration-200' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                </svg>
                                          </div>
                                          <div ref={yearRef} onClick={handleYear} className='flex items-center justify-between py-2 px-[10px] border-b border-[#D9D9D9] cursor-pointer hover:border-brand duration-200 group'>
                                                <h2 className='font-medium text-base leading-[24px] group-hover:text-brand'>Target Tahun Menikah</h2>
                                                <svg className='w-[9px] h-max text-zinc-800 group-hover:text-brand duration-200' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                </svg>
                                          </div>
                                    </div>
                              </section>
                        </main>

                        <section className='absolute w-full bottom-[61px] left-0 right-0 px-[30px] flex flex-col gap-y-6'>
                              <div className='relative z-[10]'>
                                    <Button link={'/steps/four'} type={'button'}>
                                          Continue
                                    </Button>
                              </div>
                              <Steps
                                    steps1={'bg-[#D9D9D9]'}
                                    steps2={'bg-[#D9D9D9]'}
                                    steps3={'bg-brand'}
                                    steps4={'bg-[#D9D9D9]'}
                                    steps5={'bg-[#D9D9D9]'}
                                    steps6={'bg-[#D9D9D9]'}
                              />
                        </section>

                        {/* Modal Prepare */}
                        <div id='displayOutside' className={`${displayOutside ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                              <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                                    <motion.div
                                          ref={displayInsideRef}
                                          id="displayInside"
                                          initial={{ y: "100%" }} // Start from bottom of the screen
                                          animate={{ y: displayInside ? 0 : "100%" }} // Animate to fully open or close
                                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                          drag="y" // Enables vertical dragging
                                          dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                          dragElastic={{ top: 0, bottom: 1 }} // Allow
                                          onDragStart={() => setIsDraggingPrepare(true)}
                                          onDragEnd={handleDragEndPrepare}
                                          style={{
                                                width: '100%',
                                                height: 'auto',
                                                backgroundColor: isDraggingPrepare ? '#fff' : '#fff',
                                                overflow: 'visible',
                                                borderTopLeftRadius: '24px',
                                                borderTopRightRadius: '24px',
                                                padding: '40px 30px 20px 30px',
                                                position: 'relative',
                                                cursor: 'grab',
                                          }}
                                          whileTap={{ cursor: 'grabbing' }}
                                    >
                                          <div
                                                onClick={handlePrepareClose}
                                                className="w-[40px] h-[10px] rounded-full bg-[#D9D9D9] absolute top-[20px] left-1/2 -translate-x-1/2 cursor-pointer hover:bg-brand duration-200 z-20"
                                          ></div>
                                          <div className="w-full h-max flex flex-col gap-y-[14px]">
                                                <button className="prepare_link">Sangat Siap</button>
                                                <button className="prepare_link">Siap</button>
                                                <button className="prepare_link">Cukup Siap</button>
                                                <button className="prepare_link">Masih Ragu</button>
                                          </div>
                                    </motion.div>
                              </div>
                        </div >

                        {/* Modal Year */}
                        <div id='displayOutside' className={`${displayOutsideYear ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                              <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                                    <motion.div
                                          ref={displayInsideYearRef}
                                          id="displayInside"
                                          initial={{ y: "100%" }} // Start from bottom of the screen
                                          animate={{ y: displayInsideYear ? 0 : "100%" }} // Animate to fully open or close
                                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                          drag="y" // Enables vertical dragging
                                          dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                          dragElastic={{ top: 0, bottom: 1 }} // Allow
                                          onDragStart={() => setIsDraggingYear(true)}
                                          onDragEnd={handleDragEndYear}
                                          style={{
                                                width: '100%',
                                                height: 'auto',
                                                backgroundColor: isDraggingYear ? '#fff' : '#fff',
                                                overflow: 'visible',
                                                borderTopLeftRadius: '24px',
                                                borderTopRightRadius: '24px',
                                                padding: '40px 30px 20px 30px',
                                                position: 'relative',
                                                cursor: 'grab',
                                          }}
                                          whileTap={{ cursor: 'grabbing' }}
                                    >
                                          <div
                                                onClick={handleYearClose}
                                                className="w-[40px] h-[10px] rounded-full bg-[#D9D9D9] absolute top-[20px] left-1/2 -translate-x-1/2 cursor-pointer hover:bg-brand duration-200 z-20"
                                          ></div>
                                          <div className='w-full h-max flex items-center justify-between py-10'>
                                                <div onClick={handlePrevYear} className='relative z-20 cursor-pointer hover:scale-110 duration-200 w-max group'>
                                                      <svg className='w-[10px] text-zinc-800 group-hover:text-brand' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.645 1.645L7 0L0 7L7 14L8.645 12.355L3.30167 7L8.645 1.645Z" fill="currentColor" />
                                                      </svg>

                                                </div>
                                                <div className='relative z-20'>
                                                      <h2 className='font-medium text-base leading-[24px] tracking-[-3%] text-center'>{year}</h2>
                                                </div>
                                                <div onClick={handleNextYear} className='relative z-20 cursor-pointer hover:scale-110 duration-200 w-max group'>
                                                      <svg className='w-[10px] text-zinc-800 group-hover:text-brand' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                      </svg>
                                                </div>
                                          </div>
                                    </motion.div>
                              </div>
                        </div >
                  </ViewMobileMain >
            </>
      )
}
