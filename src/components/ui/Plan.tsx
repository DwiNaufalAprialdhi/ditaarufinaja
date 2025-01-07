import Image from 'next/image'
import React from 'react'

type PlanProps = {
      icon: string
      title: string
      description: string
}

export default function Plan(props: PlanProps) {
      return (
            <>
                  <div className='flex items-start justify-normal gap-x-[14px]'>
                        <Image src={props.icon} alt='icon-plan' width={40} height={40} className='w-10 h-10 object-contain' />
                        <div className='flex flex-col'>
                              <h2 className='font-medium text-base leading-[28px]'>{props.title}</h2>
                              <p className='font-normal text-sm leading-5 text-brand_grey_text'>{props.description}</p>
                        </div>
                  </div>
            </>
      )
}
