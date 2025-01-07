import React from 'react'

type Props = {
      className?: string
      children?: React.ReactNode
      onClick?: () => void
}

export default function Tags(props: Props) {
      return (
            <>
                  <button onClick={props.onClick} className={`w-max p-[10px] border border-[#D9D9D9] rounded-[10px] hover:bg-brand hover:text-white transition-all duration-200 ${props.className}`}>
                        {props.children}
                  </button>
            </>
      )
}
