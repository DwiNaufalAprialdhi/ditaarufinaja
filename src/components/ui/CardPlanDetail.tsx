import React from 'react'

type CardPlanProps = {
      title: string
      description: string
      price: string
      children: React.ReactNode
}

export default function CardPlanDetail(props: CardPlanProps) {
      return (
            <>
                  <div className='block w-full h-max py-[30px] px-5 bg-brand rounded-[15px]'>
                        <div className='flex flex-col'>
                              <div className='flex items-center justify-between mb-[14px]'>
                                    <div className='flex items-start justify-start gap-x-1 text-white'>
                                          <h4 className='font-medium text-xs leading-[18px]'>Rp.</h4>
                                          <h2 className='font-semibold text-[24px] leading-[36px]'>{props.price}</h2>
                                    </div>
                                    <h2 className='font-normal text-xs leading-[18px] text-white'>/Account</h2>
                              </div>
                              <h2 className='font-medium text-base leading-[24px] text-white tracking-[-3%] mb-2'>{props.title}</h2>
                              <p className='font-normal text-xs leading-[18px] text-white mb-[14px]'>{props.description}</p>
                              <div className='flex flex-col mt-[14px]'>
                                    <h2 className='font-normal text-sm leading-[21px] text-white mb-[5px]'>Benefit:</h2>
                                    <div className='flex flex-col gap-y-[14px] bg-white rounded-[15px] p-[10px]'>
                                          {props.children}
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}
