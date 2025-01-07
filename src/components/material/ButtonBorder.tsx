import Link from 'next/link'
import React from 'react'

type props = {
      link: string
      children: React.ReactNode
      className?: string
      type?: string
      disabled?: boolean
}

export default function ButtonBorder(props: props) {
      const { link, children, className, type, disabled } = props;
      const commonClasses = `lg:p-[15px] p-3 bg-transparent text-[#696969] w-full font-normal lg:text-sm text-xs flex items-center justify-center text-center rounded-[15px] hover:bg-brand/5 duration-200 border border-[#696969] ${className}`;

      return (
            <>
                  {disabled ? (
                        <span className={`${commonClasses} cursor-not-allowed opacity-25`}>
                              {children}
                        </span>
                  ) : (
                        <Link href={link} type={type ? type : 'button'} className={commonClasses}>
                              {children}
                        </Link>
                  )}
            </>
      )
}