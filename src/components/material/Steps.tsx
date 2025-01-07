import React from 'react'

type Props = {
      steps1: string
      steps2: string
      steps3: string
      steps4: string
      steps5: string
      steps6: string
}

export default function Steps(props: Props) {
      return (
            <>
                  <div className='flex items-center justify-center gap-x-2'>
                        <div className={`w-[10px] h-[10px] rounded-full ${props.steps1}`}></div>
                        <div className={`w-[10px] h-[10px] rounded-full ${props.steps2}`}></div>
                        <div className={`w-[10px] h-[10px] rounded-full ${props.steps3}`}></div>
                        <div className={`w-[10px] h-[10px] rounded-full ${props.steps4}`}></div>
                        <div className={`w-[10px] h-[10px] rounded-full ${props.steps5}`}></div>
                        <div className={`w-[10px] h-[10px] rounded-full ${props.steps6}`}></div>
                  </div>
            </>
      )
}
