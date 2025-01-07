import React from 'react'

type props = {
      htmlFor: string
      label: string
      type: string
      name: string
      id: string
      placeholder: string
      className?: string
      classNameLabel?: string
}

export default function Input(props: props) {
      return (
            <>
                  <div className='flex flex-col gap-y-[10px]'>
                        <label htmlFor={props.htmlFor} className={`font-medium text-sm block leading-[21px] tracking-[-3%] z-[2] ${props.classNameLabel}`}>{props.label}</label>
                        <input type={props.type} name={props.name} id={props.id} className={`py-[11px] px-[10px] rounded-[10px] border border-[#E8E6EA] bg-white outline-none font-normal text-xs leading-[18px] tracking-[-3%] block z-[2] ${props.className}`} placeholder={props.placeholder} />
                  </div>
            </>
      )
}
