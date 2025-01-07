/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '@/components/material/Button'
import ButtonBorder from '@/components/material/ButtonBorder'
import Steps from '@/components/material/Steps'
import HeaderMain from '@/components/ui/HeaderMain'
import ViewMobileMain from '@/components/ui/ViewMobileMain'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import Radio from '@/components/material/Radio'

export default function Twelve() {
      // State Age
      const [displayOutsideAge, setDisplayOutsideAge] = useState(false)
      const [displayInsideAge, setDisplayInsideAge] = useState(false)
      const ageRef = useRef<HTMLDivElement>(null)
      const displayInsideAgeRef = useRef<HTMLDivElement>(null)
      const [isDraggingAge, setIsDraggingAge] = useState(false);

      // Handle Age
      const handleAge = () => {
            setDisplayOutsideAge(true)
            setDisplayInsideAge(true)
      }

      // Handle Age Close
      const handleAgeClose = () => {
            setTimeout(() => {
                  setDisplayOutsideAge(false)
            }, 300)
            setDisplayInsideAge(false)
      }

      // Drag Age
      const handleDragEndAge = (_event: any, info: any) => {
            setIsDraggingAge(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 500;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleAgeClose();
            }
      }

      // Click Outside Age
      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideAgeRef.current && !displayInsideAgeRef.current.contains(e.target as Node) && ageRef.current && !ageRef.current.contains(e.target as Node)) {
                        handleAgeClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }

      }, [displayInsideAgeRef, ageRef])

      // Function Age
      const [age, setAge] = useState(25);
      const handlePrevAge = () => {
            setAge((prevAge) => prevAge - 1);
      };
      const handleNextAge = () => {
            setAge((prevAge) => prevAge + 1); // Increase the year by 1
      };

      // State Status
      const [displayOutsideStatus, setDisplayOutsideStatus] = useState(false)
      const [displayInsideStatus, setDisplayInsideStatus] = useState(false)
      const statusRef = useRef<HTMLDivElement>(null)
      const displayInsideStatusRef = useRef<HTMLDivElement>(null)
      const [isDraggingStatus, setIsDraggingStatus] = useState(false);

      // Handle Status
      const handleStatus = () => {
            setDisplayOutsideStatus(true)
            setDisplayInsideStatus(true)
      }

      // Handle Status Close
      const handleStatusClose = () => {
            setTimeout(() => {
                  setDisplayOutsideStatus(false)
            }, 300)
            setDisplayInsideStatus(false)
      }

      // Drag Status
      const handleDragEndStatus = (_event: any, info: any) => {
            setIsDraggingStatus(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 500;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleStatusClose();
            }
      }

      // Click Outside Status
      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideStatusRef.current && !displayInsideStatusRef.current.contains(e.target as Node) && statusRef.current && !statusRef.current.contains(e.target as Node)) {
                        handleStatusClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }

      }, [displayInsideStatusRef, statusRef])

      // State Job
      const [displayOutsideJob, setDisplayOutsideJob] = useState(false)
      const [displayInsideJob, setDisplayInsideJob] = useState(false)
      const jobRef = useRef<HTMLDivElement>(null)
      const displayInsideJobRef = useRef<HTMLDivElement>(null)
      const [isDraggingJob, setIsDraggingJob] = useState(false);

      // Handle Job
      const handleJob = () => {
            setDisplayOutsideJob(true)
            setDisplayInsideJob(true)
      }

      // Handle Job Close
      const handleJobClose = () => {
            setTimeout(() => {
                  setDisplayOutsideJob(false)
            }, 300)
            setDisplayInsideJob(false)
      }

      // Drag Job
      const handleDragEndJob = (_event: any, info: any) => {
            setIsDraggingJob(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 500;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleJobClose();
            }
      }

      // Click Outside Job
      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideJobRef.current && !displayInsideJobRef.current.contains(e.target as Node) && jobRef.current && !jobRef.current.contains(e.target as Node)) {
                        handleJobClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }

      }, [displayInsideJobRef, jobRef])

      // State Etnis
      const [displayOutsideEtnis, setDisplayOutsideEtnis] = useState(false)
      const [displayInsideEtnis, setDisplayInsideEtnis] = useState(false)
      const etnisRef = useRef<HTMLDivElement>(null)
      const displayInsideEtnisRef = useRef<HTMLDivElement>(null)
      const [isDraggingEtnis, setIsDraggingEtnis] = useState(false);

      // Handle Etnis
      const handleEtnis = () => {
            setDisplayOutsideEtnis(true)
            setDisplayInsideEtnis(true)
      }

      // Handle Etnis Close
      const handleEtnisClose = () => {
            setTimeout(() => {
                  setDisplayOutsideEtnis(false)
            }, 300)
            setDisplayInsideEtnis(false)
      }

      // Drag Etnis
      const handleDragEndEtnis = (_event: any, info: any) => {
            setIsDraggingEtnis(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 500;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleEtnisClose();
            }
      }

      // Click Outside Etnis
      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideEtnisRef.current && !displayInsideEtnisRef.current.contains(e.target as Node) && etnisRef.current && !etnisRef.current.contains(e.target as Node)) {
                        handleEtnisClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }

      }, [displayInsideEtnisRef, etnisRef])

      // State Domisili
      const [displayOutsideDomisili, setDisplayOutsideDomisili] = useState(false)
      const [displayInsideDomisili, setDisplayInsideDomisili] = useState(false)
      const domisiliRef = useRef<HTMLDivElement>(null)
      const displayInsideDomisiliRef = useRef<HTMLDivElement>(null)
      const [isDraggingDomisili, setIsDraggingDomisili] = useState(false);

      // Handle Domisili
      const handleDomisili = () => {
            setDisplayOutsideDomisili(true)
            setDisplayInsideDomisili(true)
      }

      // Handle Domisili Close
      const handleDomisiliClose = () => {
            setTimeout(() => {
                  setDisplayOutsideDomisili(false)
            }, 300)
            setDisplayInsideDomisili(false)
      }

      // Drag Domisili
      const handleDragEndDomisili = (_event: any, info: any) => {
            setIsDraggingDomisili(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 500;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleDomisiliClose();
            }
      }

      // Click Outside Domisi
      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideDomisiliRef.current && !displayInsideDomisiliRef.current.contains(e.target as Node) && domisiliRef.current && !domisiliRef.current.contains(e.target as Node)) {
                        handleDomisiliClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }

      }, [displayInsideDomisiliRef, domisiliRef])

      // State Study
      const [displayOutsideStudy, setDisplayOutsideStudy] = useState(false)
      const [displayInsideStudy, setDisplayInsideStudy] = useState(false)
      const studyRef = useRef<HTMLDivElement>(null)
      const displayInsideStudyRef = useRef<HTMLDivElement>(null)
      const [isDraggingStudy, setIsDraggingStudy] = useState(false);

      // Handle Study
      const handleStudy = () => {
            setDisplayOutsideStudy(true)
            setDisplayInsideStudy(true)
      }

      // Handle Study Close
      const handleStudyClose = () => {
            setTimeout(() => {
                  setDisplayOutsideStudy(false)
            }, 300)
            setDisplayInsideStudy(false)
      }

      // Drag Study
      const handleDragEndStudy = (_event: any, info: any) => {
            setIsDraggingStudy(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 500;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleStudyClose();
            }
      }

      // Click Outside Study
      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideStudyRef.current && !displayInsideStudyRef.current.contains(e.target as Node) && studyRef.current && !studyRef.current.contains(e.target as Node)) {
                        handleStudyClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }

      }, [displayInsideStudyRef, studyRef])

      const [displayOutsideHeight, setDisplayOutsideHeight] = useState(false)
      const [displayInsideHeight, setDisplayInsideHeight] = useState(false)
      const heightRef = useRef<HTMLDivElement>(null)
      const displayInsideHeightRef = useRef<HTMLDivElement>(null)
      const [isDraggingHeight, setIsDraggingHeight] = useState(false);

      // Handle Height
      const handleHeight = () => {
            setDisplayOutsideHeight(true)
            setDisplayInsideHeight(true)
      }

      // Handle Height Close
      const handleHeightClose = () => {
            setTimeout(() => {
                  setDisplayOutsideHeight(false)
            }, 300)
            setDisplayInsideHeight(false)
      }

      // Drag Height
      const handleDragEndHeight = (_event: any, info: any) => {
            setIsDraggingHeight(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 500;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleHeightClose();
            }
      }

      // Click Outside Height
      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideHeightRef.current && !displayInsideHeightRef.current.contains(e.target as Node) && heightRef.current && !heightRef.current.contains(e.target as Node)) {
                        handleHeightClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }

      }, [displayInsideHeightRef, heightRef])

      // Function Height
      const [height, setHeight] = useState(165);
      const handlePrevHeight = () => {
            setHeight((prevHeight) => prevHeight - 1);
      };
      const handleNextHeight = () => {
            setHeight((prevHeight) => prevHeight + 1); // Increase the year by 1
      };

      // Function Weight
      const [weight, setWeight] = useState(56);
      const handlePrevWeight = () => {
            setWeight((prevWeight) => prevWeight - 1);
      };
      const handleNextWeight = () => {
            setWeight((prevWeight) => prevWeight + 1); // Increase the year by 1
      };

      // State Skin
      const [displayOutsideSkin, setDisplayOutsideSkin] = useState(false)
      const [displayInsideSkin, setDisplayInsideSkin] = useState(false)
      const skinRef = useRef<HTMLDivElement>(null)
      const displayInsideSkinRef = useRef<HTMLDivElement>(null)
      const [isDraggingSkin, setIsDraggingSkin] = useState(false);

      // Handle Skin
      const handleSkin = () => {
            setDisplayOutsideSkin(true)
            setDisplayInsideSkin(true)
      }

      // Handle Skin Close
      const handleSkinClose = () => {
            setTimeout(() => {
                  setDisplayOutsideSkin(false)
            }, 300)
            setDisplayInsideSkin(false)
      }

      // Drag Skin
      const handleDragEndSkin = (_event: any, info: any) => {
            setIsDraggingSkin(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 500;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleSkinClose();
            }
      }

      // Click Outside Skin
      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideSkinRef.current && !displayInsideSkinRef.current.contains(e.target as Node) && skinRef.current && !skinRef.current.contains(e.target as Node)) {
                        handleSkinClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }

      }, [displayInsideSkinRef, skinRef])

      // State Hair
      const [displayOutsideHair, setDisplayOutsideHair] = useState(false)
      const [displayInsideHair, setDisplayInsideHair] = useState(false)
      const hairRef = useRef<HTMLDivElement>(null)
      const displayInsideHairRef = useRef<HTMLDivElement>(null)
      const [isDraggingHair, setIsDraggingHair] = useState(false);

      // Handle Hair
      const handleHair = () => {
            setDisplayOutsideHair(true)
            setDisplayInsideHair(true)
      }

      // Handle Hair Close
      const handleHairClose = () => {
            setTimeout(() => {
                  setDisplayOutsideHair(false)
            }, 300)
            setDisplayInsideHair(false)
      }

      // Drag Hair
      const handleDragEndHair = (_event: any, info: any) => {
            setIsDraggingHair(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 500;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleHairClose();
            }
      }

      // Click Outside Hair
      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideHairRef.current && !displayInsideHairRef.current.contains(e.target as Node) && hairRef.current && !hairRef.current.contains(e.target as Node)) {
                        handleHairClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }

      }, [displayInsideHairRef, hairRef])

      // State Face
      const [displayOutsideFace, setDisplayOutsideFace] = useState(false)
      const [displayInsideFace, setDisplayInsideFace] = useState(false)
      const faceRef = useRef<HTMLDivElement>(null)
      const displayInsideFaceRef = useRef<HTMLDivElement>(null)
      const [isDraggingFace, setIsDraggingFace] = useState(false);

      // Handle Face
      const handleFace = () => {
            setDisplayOutsideFace(true)
            setDisplayInsideFace(true)
      }

      // Handle Face Close
      const handleFaceClose = () => {
            setTimeout(() => {
                  setDisplayOutsideFace(false)
            }, 300)
            setDisplayInsideFace(false)
      }

      // Drag Face
      const handleDragEndFace = (_event: any, info: any) => {
            setIsDraggingFace(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 500;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleFaceClose();
            }
      }

      // Click Outside Face
      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideFaceRef.current && !displayInsideFaceRef.current.contains(e.target as Node) && faceRef.current && !faceRef.current.contains(e.target as Node)) {
                        handleFaceClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }

      }, [displayInsideFaceRef, faceRef])

      // State Glasses
      const [displayOutsideGlasses, setDisplayOutsideGlasses] = useState(false)
      const [displayInsideGlasses, setDisplayInsideGlasses] = useState(false)
      const glassesRef = useRef<HTMLDivElement>(null)
      const displayInsideGlassesRef = useRef<HTMLDivElement>(null)
      const [isDraggingGlasses, setIsDraggingGlasses] = useState(false);

      // Handle Glasses
      const handleGlasses = () => {
            setDisplayOutsideGlasses(true)
            setDisplayInsideGlasses(true)
      }

      // Handle Glasses Close
      const handleGlassesClose = () => {
            setTimeout(() => {
                  setDisplayOutsideGlasses(false)
            }, 300)
            setDisplayInsideGlasses(false)
      }

      // Drag Glasses
      const handleDragEndGlasses = (_event: any, info: any) => {
            setIsDraggingGlasses(false);

            // Threshold to close the modal if dragged down enough
            const closeThreshold = 500;
            console.log(info.point.y)

            if (info.point.y > closeThreshold) {
                  handleGlassesClose();
            }
      }

      // Click Outside Glasses
      useEffect(() => {
            const handleOutsideClick = (e: Event) => {
                  if (displayInsideGlassesRef.current && !displayInsideGlassesRef.current.contains(e.target as Node) && glassesRef.current && !glassesRef.current.contains(e.target as Node)) {
                        handleGlassesClose()
                  }
            }
            document.addEventListener('mousedown', handleOutsideClick)
            return () => {
                  document.removeEventListener('mousedown', handleOutsideClick)
            }

      }, [displayInsideGlassesRef, glassesRef])

      return (
            <>
                  <ViewMobileMain>
                        <main className='relative z-20'>
                              <HeaderMain link={'/steps/eleven'} />

                              <section className='mt-[50px] flex flex-col'>
                                    <h2 className='font-semibold text-[24px] leading-[24px] tracking-[-3%] text-brand text-center'>
                                          Kriteria Pasangan Anda
                                    </h2>

                                    <Image src={'/assets/icon/partner.svg'} alt='person' width={150} height={150} className='w-[150px] h-[150px] object-contain mt-[50px] mx-auto' />

                                    <div className='flex flex-col gap-y-[14px] mt-[50px]'>
                                          {/* Text Field */}
                                          <div className='flex flex-col'>
                                                <input type="text" name='desc' id='desc' className='bg-transparent border-b border-zinc-800 outline-none w-full text-xs font-normal text-zinc-800 leading-[18px] py-[11px] mb-[14px]' placeholder='Gambarkan pribadi Anda' />
                                                <h2 className='font-normal text-xs leading-[18px] tracking-[-3%] text-zinc-800'>Deskripsikan pasangan yang Anda inginkan</h2>
                                          </div>
                                          {/* Age */}
                                          <div ref={ageRef} onClick={handleAge} className='flex items-center justify-between py-2 px-[10px] border-b border-[#D9D9D9] cursor-pointer hover:border-brand duration-200 group'>
                                                <h2 className='font-medium text-base leading-[24px] group-hover:text-brand'>Usia</h2>
                                                <svg className='w-[9px] h-max text-zinc-800 group-hover:text-brand duration-200' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                </svg>
                                          </div>
                                          {/* Status */}
                                          <div ref={statusRef} onClick={handleStatus} className='flex items-center justify-between py-2 px-[10px] border-b border-[#D9D9D9] cursor-pointer hover:border-brand duration-200 group'>
                                                <h2 className='font-medium text-base leading-[24px] group-hover:text-brand'>Status</h2>
                                                <svg className='w-[9px] h-max text-zinc-800 group-hover:text-brand duration-200' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                </svg>
                                          </div>
                                          {/* Job */}
                                          <div ref={jobRef} onClick={handleJob} className='flex items-center justify-between py-2 px-[10px] border-b border-[#D9D9D9] cursor-pointer hover:border-brand duration-200 group'>
                                                <h2 className='font-medium text-base leading-[24px] group-hover:text-brand'>Pekerjaan</h2>
                                                <svg className='w-[9px] h-max text-zinc-800 group-hover:text-brand duration-200' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                </svg>
                                          </div>
                                          {/* Etnis */}
                                          <div ref={etnisRef} onClick={handleEtnis} className='flex items-center justify-between py-2 px-[10px] border-b border-[#D9D9D9] cursor-pointer hover:border-brand duration-200 group'>
                                                <h2 className='font-medium text-base leading-[24px] group-hover:text-brand'>Etnis</h2>
                                                <svg className='w-[9px] h-max text-zinc-800 group-hover:text-brand duration-200' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                </svg>
                                          </div>
                                          {/* Domisili */}
                                          <div ref={domisiliRef} onClick={handleDomisili} className='flex items-center justify-between py-2 px-[10px] border-b border-[#D9D9D9] cursor-pointer hover:border-brand duration-200 group'>
                                                <h2 className='font-medium text-base leading-[24px] group-hover:text-brand'>Domisili saat ini</h2>
                                                <svg className='w-[9px] h-max text-zinc-800 group-hover:text-brand duration-200' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                </svg>
                                          </div>
                                          {/* Study */}
                                          <div ref={studyRef} onClick={handleStudy} className='flex items-center justify-between py-2 px-[10px] border-b border-[#D9D9D9] cursor-pointer hover:border-brand duration-200 group'>
                                                <h2 className='font-medium text-base leading-[24px] group-hover:text-brand'>Pendidikan Terakhir</h2>
                                                <svg className='w-[9px] h-max text-zinc-800 group-hover:text-brand duration-200' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                </svg>
                                          </div>
                                          {/* Height & Weight */}
                                          <div ref={heightRef} onClick={handleHeight} className='flex items-center justify-between py-2 px-[10px] border-b border-[#D9D9D9] cursor-pointer hover:border-brand duration-200 group'>
                                                <h2 className='font-medium text-base leading-[24px] group-hover:text-brand'>Tinggi dan berat badan</h2>
                                                <svg className='w-[9px] h-max text-zinc-800 group-hover:text-brand duration-200' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                </svg>
                                          </div>
                                          {/* Skin */}
                                          <div ref={skinRef} onClick={handleSkin} className='flex items-center justify-between py-2 px-[10px] border-b border-[#D9D9D9] cursor-pointer hover:border-brand duration-200 group'>
                                                <h2 className='font-medium text-base leading-[24px] group-hover:text-brand'>Warna Kulit</h2>
                                                <svg className='w-[9px] h-max text-zinc-800 group-hover:text-brand duration-200' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                </svg>
                                          </div>
                                          {/* Hair */}
                                          <div ref={hairRef} onClick={handleHair} className='flex items-center justify-between py-2 px-[10px] border-b border-[#D9D9D9] cursor-pointer hover:border-brand duration-200 group'>
                                                <h2 className='font-medium text-base leading-[24px] group-hover:text-brand'>Jenis Rambut</h2>
                                                <svg className='w-[9px] h-max text-zinc-800 group-hover:text-brand duration-200' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                </svg>
                                          </div>
                                          {/* Face */}
                                          <div ref={faceRef} onClick={handleFace} className='flex items-center justify-between py-2 px-[10px] border-b border-[#D9D9D9] cursor-pointer hover:border-brand duration-200 group'>
                                                <h2 className='font-medium text-base leading-[24px] group-hover:text-brand'>Bentuk Wajah</h2>
                                                <svg className='w-[9px] h-max text-zinc-800 group-hover:text-brand duration-200' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                </svg>
                                          </div>
                                          {/* Glasses */}
                                          <div ref={glassesRef} onClick={handleGlasses} className='flex items-center justify-between py-2 px-[10px] border-b border-[#D9D9D9] cursor-pointer hover:border-brand duration-200 group'>
                                                <h2 className='font-medium text-base leading-[24px] group-hover:text-brand'>Berkacamata</h2>
                                                <svg className='w-[9px] h-max text-zinc-800 group-hover:text-brand duration-200' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                </svg>
                                          </div>
                                    </div>
                              </section>

                              <section className='w-full flex flex-col gap-y-6 mt-[46px]'>
                                    <div className='relative z-[10] flex items-center justify-center gap-x-[14px]'>
                                          <Button link={'/steps/thirteen'} type={'button'}>
                                                Continue
                                          </Button>
                                          <ButtonBorder link={'/steps/thirteen'} type={'button'} >
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

                        {/* Modal Age */}
                        <div id='displayOutside' className={`${displayOutsideAge ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                              <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                                    <motion.div
                                          ref={displayInsideAgeRef}
                                          id="displayInside"
                                          initial={{ y: "100%" }} // Start from bottom of the screen
                                          animate={{ y: displayInsideAge ? 0 : "100%" }} // Animate to fully open or close
                                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                          drag="y" // Enables vertical dragging
                                          dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                          dragElastic={{ top: 0, bottom: 1 }} // Allow
                                          onDragStart={() => setIsDraggingAge(true)}
                                          onDragEnd={handleDragEndAge}
                                          style={{
                                                width: '100%',
                                                height: 'auto',
                                                backgroundColor: isDraggingAge ? '#fff' : '#fff',
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
                                                onClick={handleAgeClose}
                                                className="w-[40px] h-[10px] rounded-full bg-[#D9D9D9] absolute top-[20px] left-1/2 -translate-x-1/2 cursor-pointer hover:bg-brand duration-200 z-20"
                                          ></div>
                                          <div className="w-full h-max overflow-y-auto flex flex-col gap-y-[14px] py-10">
                                                <div className='flex items-center justify-between py-2 px-[10px]'>
                                                      <div onClick={handlePrevAge} className='relative z-20 cursor-pointer hover:scale-110 duration-200 w-max group'>
                                                            <svg className='w-[10px] text-zinc-800 group-hover:text-brand' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M8.645 1.645L7 0L0 7L7 14L8.645 12.355L3.30167 7L8.645 1.645Z" fill="currentColor" />
                                                            </svg>

                                                      </div>
                                                      <div className='relative z-20'>
                                                            <h2 className='font-medium text-base leading-[24px] tracking-[-3%] text-center'>{age}Tahun</h2>
                                                      </div>
                                                      <div onClick={handleNextAge} className='relative z-20 cursor-pointer hover:scale-110 duration-200 w-max group'>
                                                            <svg className='w-[10px] text-zinc-800 group-hover:text-brand' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                            </svg>
                                                      </div>
                                                </div>
                                          </div>
                                    </motion.div>
                              </div>
                        </div >

                        {/* Modal Status */}
                        <div id='displayOutside' className={`${displayOutsideStatus ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                              <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                                    <motion.div
                                          ref={displayInsideStatusRef}
                                          id="displayInside"
                                          initial={{ y: "100%" }} // Start from bottom of the screen
                                          animate={{ y: displayInsideStatus ? 0 : "100%" }} // Animate to fully open or close
                                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                          drag="y" // Enables vertical dragging
                                          dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                          dragElastic={{ top: 0, bottom: 1 }} // Allow
                                          onDragStart={() => setIsDraggingStatus(true)}
                                          onDragEnd={handleDragEndStatus}
                                          style={{
                                                width: '100%',
                                                height: 'auto',
                                                backgroundColor: isDraggingStatus ? '#fff' : '#fff',
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
                                                onClick={handleStatusClose}
                                                className="w-[40px] h-[10px] rounded-full bg-[#D9D9D9] absolute top-[20px] left-1/2 -translate-x-1/2 cursor-pointer hover:bg-brand duration-200 z-20"
                                          ></div>
                                          <div className="w-full h-max overflow-y-auto flex flex-col gap-y-[14px]">
                                                <Radio htmlFor={'status'} label={'Lajang'} name={'status'} id={'status'} />
                                                <Radio htmlFor={'status'} label={'Menikah'} name={'status'} id={'status'} />
                                                <Radio htmlFor={'status'} label={'Cerai Hidup'} name={'status'} id={'status'} />
                                                <Radio htmlFor={'status'} label={'Cerai Mati'} name={'status'} id={'status'} />

                                          </div>
                                    </motion.div>
                              </div>
                        </div >

                        {/* Modal Job */}
                        <div id='displayOutside' className={`${displayOutsideJob ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                              <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                                    <motion.div
                                          ref={displayInsideJobRef}
                                          id="displayInside"
                                          initial={{ y: "100%" }} // Start from bottom of the screen
                                          animate={{ y: displayInsideJob ? 0 : "100%" }} // Animate to fully open or close
                                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                          drag="y" // Enables vertical dragging
                                          dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                          dragElastic={{ top: 0, bottom: 1 }} // Allow
                                          onDragStart={() => setIsDraggingJob(true)}
                                          onDragEnd={handleDragEndJob}
                                          style={{
                                                width: '100%',
                                                height: 'auto',
                                                backgroundColor: isDraggingJob ? '#fff' : '#fff',
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
                                                onClick={handleJobClose}
                                                className="w-[40px] h-[10px] rounded-full bg-[#D9D9D9] absolute top-[20px] left-1/2 -translate-x-1/2 cursor-pointer hover:bg-brand duration-200 z-20"
                                          ></div>
                                          <div className="w-full h-max overflow-y-auto flex flex-col gap-y-[14px]">
                                                <Radio htmlFor={'job'} label={'Pegawan negeri sipil'} name={'job'} id={'job'} />
                                                <Radio htmlFor={'job'} label={'Pegawai swasta'} name={'job'} id={'job'} />
                                                <Radio htmlFor={'job'} label={'Pegawai Honorer'} name={'job'} id={'job'} />
                                                <Radio htmlFor={'job'} label={'Militer/ Polisi'} name={'job'} id={'job'} />
                                                <Radio htmlFor={'job'} label={'Dokter'} name={'job'} id={'job'} />
                                                <Radio htmlFor={'job'} label={'Guru'} name={'job'} id={'job'} />
                                                <Radio htmlFor={'job'} label={'Lainnya'} name={'job'} id={'job'} />

                                          </div>
                                    </motion.div>
                              </div>
                        </div >

                        {/* Modal Etnis */}
                        <div id='displayOutside' className={`${displayOutsideEtnis ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                              <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                                    <motion.div
                                          ref={displayInsideEtnisRef}
                                          id="displayInside"
                                          initial={{ y: "100%" }} // Start from bottom of the screen
                                          animate={{ y: displayInsideEtnis ? 0 : "100%" }} // Animate to fully open or close
                                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                          drag="y" // Enables vertical dragging
                                          dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                          dragElastic={{ top: 0, bottom: 1 }} // Allow
                                          onDragStart={() => setIsDraggingEtnis(true)}
                                          onDragEnd={handleDragEndEtnis}
                                          style={{
                                                width: '100%',
                                                height: 'auto',
                                                backgroundColor: isDraggingEtnis ? '#fff' : '#fff',
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
                                                onClick={handleEtnisClose}
                                                className="w-[40px] h-[10px] rounded-full bg-[#D9D9D9] absolute top-[20px] left-1/2 -translate-x-1/2 cursor-pointer hover:bg-brand duration-200 z-20"
                                          ></div>
                                          <div className="w-full h-[300px] overflow-y-auto flex flex-col gap-y-[14px]">
                                                <Radio htmlFor={'etnis'} label={'Jawa'} name={'etnis'} id={'etnis'} />
                                                <Radio htmlFor={'etnis'} label={'Sunda'} name={'etnis'} id={'etnis'} />
                                                <Radio htmlFor={'etnis'} label={'Betawi'} name={'etnis'} id={'etnis'} />
                                                <Radio htmlFor={'etnis'} label={'Baduy'} name={'etnis'} id={'etnis'} />
                                                <Radio htmlFor={'etnis'} label={'Tengger'} name={'etnis'} id={'etnis'} />
                                                <Radio htmlFor={'etnis'} label={'Aceh'} name={'etnis'} id={'etnis'} />
                                                <Radio htmlFor={'etnis'} label={'Batak'} name={'etnis'} id={'etnis'} />
                                                <Radio htmlFor={'etnis'} label={'Minangkabau'} name={'etnis'} id={'etnis'} />
                                                <Radio htmlFor={'etnis'} label={'Dayak'} name={'etnis'} id={'etnis'} />
                                                <Radio htmlFor={'etnis'} label={'Bali'} name={'etnis'} id={'etnis'} />
                                                <Radio htmlFor={'etnis'} label={'Asmat'} name={'etnis'} id={'etnis'} />
                                                <Radio htmlFor={'etnis'} label={'Arab'} name={'etnis'} id={'etnis'} />
                                                <Radio htmlFor={'etnis'} label={'Cina'} name={'etnis'} id={'etnis'} />
                                                <div className='flex flex-col'>
                                                      <Radio htmlFor={'etnis'} label={'Lainnya'} name={'etnis'} id={'etnis'} />
                                                      {/* Text Field */}
                                                      <div className='flex flex-col px-[10px]'>
                                                            <input type="text" name='desc' id='desc' className='bg-transparent border-b border-zinc-800 outline-none w-full text-xs font-normal text-zinc-800 leading-[18px] py-[11px] mb-[14px]' placeholder='Masukkan deskripsi' />
                                                            <h2 className='font-normal text-xs leading-[18px] tracking-[-3%] text-zinc-800'>Deskripsi etnis Anda</h2>
                                                      </div>
                                                </div>
                                          </div>
                                    </motion.div>
                              </div>
                        </div >

                        {/* Modal Domisili */}
                        <div id='displayOutside' className={`${displayOutsideDomisili ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                              <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                                    <motion.div
                                          ref={displayInsideDomisiliRef}
                                          id="displayInside"
                                          initial={{ y: "100%" }} // Start from bottom of the screen
                                          animate={{ y: displayInsideDomisili ? 0 : "100%" }} // Animate to fully open or close
                                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                          drag="y" // Enables vertical dragging
                                          dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                          dragElastic={{ top: 0, bottom: 1 }} // Allow
                                          onDragStart={() => setIsDraggingDomisili(true)}
                                          onDragEnd={handleDragEndDomisili}
                                          style={{
                                                width: '100%',
                                                height: 'auto',
                                                backgroundColor: isDraggingDomisili ? '#fff' : '#fff',
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
                                                onClick={handleDomisiliClose}
                                                className="w-[40px] h-[10px] rounded-full bg-[#D9D9D9] absolute top-[20px] left-1/2 -translate-x-1/2 cursor-pointer hover:bg-brand duration-200 z-20"
                                          ></div>
                                          <h2 className='font-medium text-base leading-[24px] tracking-[-3%] text-zinc-800 py-2'>Domisili saat ini</h2>
                                          <div className="w-full h-max overflow-y-auto flex flex-col gap-y-[14px]">
                                                {/* Text Field */}
                                                <div className='flex flex-col'>
                                                      <input type="text" name='desc' id='desc' className='bg-transparent border-b border-zinc-800 outline-none w-full text-xs font-normal text-zinc-800 leading-[18px] py-[11px] mb-[14px]' placeholder='Masukkan domisili' />
                                                      <h2 className='font-normal text-xs leading-[18px] tracking-[-3%] text-zinc-800'>Masukkan Domisili Anda</h2>
                                                </div>
                                          </div>
                                    </motion.div>
                              </div>
                        </div >

                        {/* Modal Study */}
                        <div id='displayOutside' className={`${displayOutsideStudy ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                              <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                                    <motion.div
                                          ref={displayInsideStudyRef}
                                          id="displayInside"
                                          initial={{ y: "100%" }} // Start from bottom of the screen
                                          animate={{ y: displayInsideStudy ? 0 : "100%" }} // Animate to fully open or close
                                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                          drag="y" // Enables vertical dragging
                                          dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                          dragElastic={{ top: 0, bottom: 1 }} // Allow
                                          onDragStart={() => setIsDraggingStudy(true)}
                                          onDragEnd={handleDragEndStudy}
                                          style={{
                                                width: '100%',
                                                height: 'auto',
                                                backgroundColor: isDraggingStudy ? '#fff' : '#fff',
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
                                                onClick={handleStudyClose}
                                                className="w-[40px] h-[10px] rounded-full bg-[#D9D9D9] absolute top-[20px] left-1/2 -translate-x-1/2 cursor-pointer hover:bg-brand duration-200 z-20"
                                          ></div>
                                          <div className="w-full h-max overflow-y-auto flex flex-col gap-y-[14px]">
                                                <Radio htmlFor={'study'} label={'SD'} name={'study'} id={'study'} />
                                                <Radio htmlFor={'study'} label={'SMP'} name={'study'} id={'study'} />
                                                <Radio htmlFor={'study'} label={'SMA / SMK/ SMU'} name={'study'} id={'study'} />
                                                <Radio htmlFor={'study'} label={'Diploma'} name={'study'} id={'study'} />
                                                <Radio htmlFor={'study'} label={'S1'} name={'study'} id={'study'} />
                                                <Radio htmlFor={'study'} label={'S2'} name={'study'} id={'study'} />
                                                <Radio htmlFor={'study'} label={'S3'} name={'study'} id={'study'} />
                                          </div>
                                    </motion.div>
                              </div>
                        </div >

                        {/* Modal Height & Weight */}
                        <div id='displayOutside' className={`${displayOutsideHeight ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                              <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                                    <motion.div
                                          ref={displayInsideHeightRef}
                                          id="displayInside"
                                          initial={{ y: "100%" }} // Start from bottom of the screen
                                          animate={{ y: displayInsideHeight ? 0 : "100%" }} // Animate to fully open or close
                                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                          drag="y" // Enables vertical dragging
                                          dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                          dragElastic={{ top: 0, bottom: 1 }} // Allow
                                          onDragStart={() => setIsDraggingHeight(true)}
                                          onDragEnd={handleDragEndHeight}
                                          style={{
                                                width: '100%',
                                                height: 'auto',
                                                backgroundColor: isDraggingHeight ? '#fff' : '#fff',
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
                                                onClick={handleHeightClose}
                                                className="w-[40px] h-[10px] rounded-full bg-[#D9D9D9] absolute top-[20px] left-1/2 -translate-x-1/2 cursor-pointer hover:bg-brand duration-200 z-20"
                                          ></div>
                                          <div className="w-full h-max overflow-y-auto flex flex-col gap-y-[14px] py-10">
                                                <div className='flex items-center justify-between py-2 px-[10px]'>
                                                      <div onClick={handlePrevHeight} className='relative z-20 cursor-pointer hover:scale-110 duration-200 w-max group'>
                                                            <svg className='w-[10px] text-zinc-800 group-hover:text-brand' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M8.645 1.645L7 0L0 7L7 14L8.645 12.355L3.30167 7L8.645 1.645Z" fill="currentColor" />
                                                            </svg>

                                                      </div>
                                                      <div className='relative z-20'>
                                                            <h2 className='font-medium text-base leading-[24px] tracking-[-3%] text-center'>{height}cm</h2>
                                                      </div>
                                                      <div onClick={handleNextHeight} className='relative z-20 cursor-pointer hover:scale-110 duration-200 w-max group'>
                                                            <svg className='w-[10px] text-zinc-800 group-hover:text-brand' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                            </svg>
                                                      </div>
                                                </div>
                                                <div className='flex items-center justify-between py-2 px-[10px]'>
                                                      <div onClick={handlePrevWeight} className='relative z-20 cursor-pointer hover:scale-110 duration-200 w-max group'>
                                                            <svg className='w-[10px] text-zinc-800 group-hover:text-brand' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M8.645 1.645L7 0L0 7L7 14L8.645 12.355L3.30167 7L8.645 1.645Z" fill="currentColor" />
                                                            </svg>

                                                      </div>
                                                      <div className='relative z-20'>
                                                            <h2 className='font-medium text-base leading-[24px] tracking-[-3%] text-center'>{weight}kg</h2>
                                                      </div>
                                                      <div onClick={handleNextWeight} className='relative z-20 cursor-pointer hover:scale-110 duration-200 w-max group'>
                                                            <svg className='w-[10px] text-zinc-800 group-hover:text-brand' viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M0.355 12.355L2 14L9 7L2 0L0.355 1.645L5.69833 7L0.355 12.355Z" fill="currentColor" />
                                                            </svg>
                                                      </div>
                                                </div>
                                          </div>
                                    </motion.div>
                              </div>
                        </div >

                        {/* Modal Skin */}
                        <div id='displayOutside' className={`${displayOutsideSkin ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                              <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                                    <motion.div
                                          ref={displayInsideSkinRef}
                                          id="displayInside"
                                          initial={{ y: "100%" }} // Start from bottom of the screen
                                          animate={{ y: displayInsideSkin ? 0 : "100%" }} // Animate to fully open or close
                                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                          drag="y" // Enables vertical dragging
                                          dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                          dragElastic={{ top: 0, bottom: 1 }} // Allow
                                          onDragStart={() => setIsDraggingSkin(true)}
                                          onDragEnd={handleDragEndSkin}
                                          style={{
                                                width: '100%',
                                                height: 'auto',
                                                backgroundColor: isDraggingSkin ? '#fff' : '#fff',
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
                                                onClick={handleSkinClose}
                                                className="w-[40px] h-[10px] rounded-full bg-[#D9D9D9] absolute top-[20px] left-1/2 -translate-x-1/2 cursor-pointer hover:bg-brand duration-200 z-20"
                                          ></div>
                                          <div className="w-full h-max overflow-y-auto flex flex-col gap-y-[14px]">
                                                <Radio htmlFor={'skin'} label={'Hitam'} name={'skin'} id={'skin'} />
                                                <Radio htmlFor={'skin'} label={'Putih'} name={'skin'} id={'skin'} />
                                                <Radio htmlFor={'skin'} label={'Sawo Matang'} name={'skin'} id={'skin'} />
                                                <Radio htmlFor={'skin'} label={'Kuning'} name={'skin'} id={'skin'} />
                                          </div>
                                    </motion.div>
                              </div>
                        </div >

                        {/* Modal Hair */}
                        <div id='displayOutside' className={`${displayOutsideHair ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                              <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                                    <motion.div
                                          ref={displayInsideHairRef}
                                          id="displayInside"
                                          initial={{ y: "100%" }} // Start from bottom of the screen
                                          animate={{ y: displayInsideHair ? 0 : "100%" }} // Animate to fully open or close
                                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                          drag="y" // Enables vertical dragging
                                          dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                          dragElastic={{ top: 0, bottom: 1 }} // Allow
                                          onDragStart={() => setIsDraggingHair(true)}
                                          onDragEnd={handleDragEndHair}
                                          style={{
                                                width: '100%',
                                                height: 'auto',
                                                backgroundColor: isDraggingHair ? '#fff' : '#fff',
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
                                                onClick={handleHairClose}
                                                className="w-[40px] h-[10px] rounded-full bg-[#D9D9D9] absolute top-[20px] left-1/2 -translate-x-1/2 cursor-pointer hover:bg-brand duration-200 z-20"
                                          ></div>
                                          <div className="w-full h-max overflow-y-auto flex flex-col gap-y-[14px]">
                                                <Radio htmlFor={'hair'} label={'Lurus'} name={'hair'} id={'hair'} />
                                                <Radio htmlFor={'hair'} label={'Ikal'} name={'hair'} id={'hair'} />
                                                <Radio htmlFor={'hair'} label={'Keriting Panjang'} name={'hair'} id={'hair'} />
                                                <Radio htmlFor={'hair'} label={'Bergelombang'} name={'hair'} id={'hair'} />
                                          </div>
                                    </motion.div>
                              </div>
                        </div >

                        {/* Modal Face */}
                        <div id='displayOutside' className={`${displayOutsideFace ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                              <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                                    <motion.div
                                          ref={displayInsideFaceRef}
                                          id="displayInside"
                                          initial={{ y: "100%" }} // Start from bottom of the screen
                                          animate={{ y: displayInsideFace ? 0 : "100%" }} // Animate to fully open or close
                                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                          drag="y" // Enables vertical dragging
                                          dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                          dragElastic={{ top: 0, bottom: 1 }} // Allow
                                          onDragStart={() => setIsDraggingFace(true)}
                                          onDragEnd={handleDragEndFace}
                                          style={{
                                                width: '100%',
                                                height: 'auto',
                                                backgroundColor: isDraggingFace ? '#fff' : '#fff',
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
                                                onClick={handleFaceClose}
                                                className="w-[40px] h-[10px] rounded-full bg-[#D9D9D9] absolute top-[20px] left-1/2 -translate-x-1/2 cursor-pointer hover:bg-brand duration-200 z-20"
                                          ></div>
                                          <div className="w-full h-max overflow-y-auto flex flex-col gap-y-[14px]">
                                                <Radio htmlFor={'face'} label={'Bulat'} name={'face'} id={'face'} />
                                                <Radio htmlFor={'face'} label={'Persegi'} name={'face'} id={'face'} />
                                                <Radio htmlFor={'face'} label={'Persegi Panjang'} name={'face'} id={'face'} />
                                                <Radio htmlFor={'face'} label={'Berlian'} name={'face'} id={'face'} />
                                                <Radio htmlFor={'face'} label={'Oval'} name={'face'} id={'face'} />
                                                <Radio htmlFor={'face'} label={'Segitiga'} name={'face'} id={'face'} />
                                          </div>
                                    </motion.div>
                              </div>
                        </div >

                        {/* Modal Glasses */}
                        <div id='displayOutside' className={`${displayOutsideGlasses ? 'fixed' : 'hidden'} w-full h-screen bg-black top-0 left-0 right-0 bottom-0 bg-opacity-30 z-[100]`}>
                              <div className={`w-full md:max-w-[480px] max-w-none md:min-w-[480px] min-w-min bg-transparent rounded-t-3xl mx-auto h-max bottom-0 absolute left-0 right-0`}>
                                    <motion.div
                                          ref={displayInsideGlassesRef}
                                          id="displayInside"
                                          initial={{ y: "100%" }} // Start from bottom of the screen
                                          animate={{ y: displayInsideGlasses ? 0 : "100%" }} // Animate to fully open or close
                                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                          drag="y" // Enables vertical dragging
                                          dragConstraints={{ top: 0, bottom: 0 }} // Limits dragging area
                                          dragElastic={{ top: 0, bottom: 1 }} // Allow
                                          onDragStart={() => setIsDraggingGlasses(true)}
                                          onDragEnd={handleDragEndGlasses}
                                          style={{
                                                width: '100%',
                                                height: 'auto',
                                                backgroundColor: isDraggingGlasses ? '#fff' : '#fff',
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
                                                onClick={handleGlassesClose}
                                                className="w-[40px] h-[10px] rounded-full bg-[#D9D9D9] absolute top-[20px] left-1/2 -translate-x-1/2 cursor-pointer hover:bg-brand duration-200 z-20"
                                          ></div>
                                          <div className="w-full h-max overflow-y-auto flex flex-col gap-y-[14px]">
                                                <Radio htmlFor={'glasses'} label={'Ya'} name={'glasses'} id={'glasses'} />
                                                <Radio htmlFor={'glasses'} label={'Tidak'} name={'glasses'} id={'glasses'} />
                                          </div>
                                    </motion.div>
                              </div>
                        </div >

                  </ViewMobileMain>
            </>
      )
}
