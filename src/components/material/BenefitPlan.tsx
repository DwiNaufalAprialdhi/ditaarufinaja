import Image from 'next/image'
import React from 'react'

type BenefitPlanProps = {
      title: string
}

export default function BenefitPlan(props: BenefitPlanProps) {
      return (
            <div className='flex items-center gap-x-[10px]'>
                  <Image src='/assets/icon/icon-check-circle.svg' width={24} height={24} alt='check' className='w-6 h-6 object-cover' />
                  <h2 className='font-normal text-xs leading-[18px] text-zinc-800'>{props.title}</h2>
            </div>
      )
}
