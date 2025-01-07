import React from 'react'

type Props = {
      htmlFor: string
      label: string
      name: string
      id: string
      className?: string
}
export default function Radio(props: Props) {
      return (
            <>
                  <div className='flex items-center justify-between py-2 px-[10px]'>
                        <label htmlFor={props.htmlFor} className='font-medium text-base leading-[24px]'>{props.label}</label>
                        <div className='relative'>
                              <input type="radio" name={props.name} id={props.id} className='absolute top-0 right-0 w-5 h-5 opacity-0 cursor-pointer peer' />
                              <div className={`bg-transparent border-2 border-[#D9D9D9] w-[20px] h-[20px] rounded-full peer-checked:bg-brand ${props.className}`}></div>
                        </div>
                  </div>
            </>
      )
}
