import React from 'react'

type IconLockProps = {
      className?: string
}

export default function IconLock(props: IconLockProps) {
      return (
            <>
                  <svg className={props.className} viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0234 28.9766V24.5C39.0234 19.5312 34.9688 15.5 30 15.5C25.0312 15.5 20.9766 19.5312 20.9766 24.5V28.9766H17.9883V45.5H42.0117V28.9766H39.0234ZM24.0234 24.5C24.0234 21.1836 26.6836 18.5 30 18.5C33.3164 18.5 35.9766 21.1836 35.9766 24.5V28.9766H24.0234V24.5Z" fill="currentColor" />
                  </svg>

            </>
      )
}
