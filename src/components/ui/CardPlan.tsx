import React from 'react'

type CardPlanProps = {
      category: string
      title: string
      description: string
      price: string
      children: React.ReactNode
}

export default function CardPlan(props: CardPlanProps) {
      return (
            <>
                  <div className='block w-full h-[455px] py-[30px] px-5 bg-[#FEF2F3] border-t border-[#EB4853]/50 rounded-[15px] relative cursor-pointer shadow-sm shadow-brand'>
                        <div className='bg-brand rounded-full w-max h-max py-[5px] px-[10px]'>
                              <h2 className='text-white font-normal text-[10px] leading-[15px]'>{props.category}</h2>
                        </div>
                        <div className='flex flex-col mt-[14px]'>
                              <h2 className='font-medium text-base leading-[24px] text-brand tracking-[-3%] mb-2'>{props.title}</h2>
                              <p className='font-normal text-xs leading-[18px] text-zinc-500 mb-[14px]'>{props.description}</p>
                              <div className='flex items-center justify-between'>
                                    <div className='flex items-start justify-start gap-x-1 text-zinc-800'>
                                          <h4 className='font-medium text-xs leading-[18px]'>Rp.</h4>
                                          <h2 className='font-semibold text-[24px] leading-[36px]'>{props.price}</h2>
                                    </div>
                                    <h2 className='font-normal text-xs leading-[18px] text-zinc-500'>/Account</h2>
                              </div>
                              <div className='flex flex-col mt-[14px]'>
                                    <h2 className='font-normal text-sm leading-[21px] text-zinc-500 mb-[5px]'>Benefit:</h2>
                                    <div className='flex flex-col gap-y-[14px]'>
                                          {props.children}
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}
