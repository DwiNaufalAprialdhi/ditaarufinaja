import React from 'react'

type IconDislikeProps = {
      className?: string
}

export default function IconDislike(props: IconDislikeProps) {
      return (
            <>
                  <svg className={`${props.className ? `${props.className} w-[20px] h-[20px] text-white` : 'w-[20px] h-[20px] text-white'}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.24408 5.24408C5.56951 4.91864 6.09715 4.91864 6.42259 5.24408L10 8.82149L13.5774 5.24408C13.9028 4.91864 14.4305 4.91864 14.7559 5.24408C15.0814 5.56951 15.0814 6.09715 14.7559 6.42259L11.1785 10L14.7559 13.5774C15.0814 13.9028 15.0814 14.4305 14.7559 14.7559C14.4305 15.0814 13.9028 15.0814 13.5774 14.7559L10 11.1785L6.42259 14.7559C6.09715 15.0814 5.56951 15.0814 5.24408 14.7559C4.91864 14.4305 4.91864 13.9028 5.24408 13.5774L8.82149 10L5.24408 6.42259C4.91864 6.09715 4.91864 5.56951 5.24408 5.24408Z" fill="currentColor" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
            </>
      )
}