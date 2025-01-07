import React, { useState } from 'react'

type props = {
      htmlFor: string
      label: string
      name: string
      id: string
      placeholder: string
      className?: string
}

export default function InputPassword(props: props) {

      const [showPassword, setShowPassword] = useState(false)
      const handleShowPassword = () => {
            setShowPassword(true)
      }
      const handleHidePassword = () => {
            setShowPassword(false)
      }

      return (
            <>
                  <div className='flex flex-col gap-y-[10px]'>
                        <label htmlFor={props.htmlFor} className='font-medium text-sm block leading-[21px] tracking-[-3%] z-[2]'>{props.label}</label>
                        <div className='w-full relative'>
                              <input type={showPassword ? 'text' : 'password'} name={props.name} id={props.id} className={`w-full py-[11px] px-[10px] rounded-[10px] border border-[#E8E6EA] bg-white outline-none font-normal text-xs leading-[18px] tracking-[-3%] block z-[2] ${props.className}`} placeholder={props.placeholder} />
                              {/* icon eye close */}
                              <svg onClick={handleShowPassword} className={`${showPassword ? 'hidden' : 'block'} absolute top-[11px] right-[10px] w-5 h-5 object-contain text-zinc-800 cursor-pointer`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 10C4 10 5.6 15 12 15M12 15C18.4 15 20 10 20 10M12 15V18M18 17L16 14.5M6 17L8 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                              {/* icon eye open */}
                              <svg onClick={handleHidePassword} className={`${showPassword ? 'block' : 'hidden'} absolute top-[11px] right-[10px] w-5 h-5 object-contain text-zinc-800 cursor-pointer`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12C4 12 5.6 7 12 7M12 7C18.4 7 20 12 20 12M12 7V4M18 5L16 7.5M6 5L8 7.5M15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                        </div>
                  </div>
            </>
      )
}
