import React from 'react'

type ActionProps = {
      children?: React.ReactNode
}
export default function Action(props: ActionProps) {
      return (
            <>
                  <div className='fixed bottom-[68px] left-1/2 -translate-x-1/2 z-[99] w-full max-w-[256px] h-auto bg-transparent'>
                        <div className='w-full max-w-[256px] flex items-center justify-between'>
                              {props.children}
                        </div>
                  </div>
            </>
      )
}
