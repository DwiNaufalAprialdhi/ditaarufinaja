import React from 'react'

type IconLikeProps = {
      className?: string
}

export default function IconLike(props: IconLikeProps) {
      return (
            <>
                  <svg className={`${props.className ? `${props.className} w-[20px] h-[20px] text-white` : 'w-[20px] h-[20px] text-white'}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.25033 3.3335C3.71902 3.3335 1.66699 5.38554 1.66699 7.91683C1.66699 12.5002 7.08366 16.6668 10.0003 17.6361C12.917 16.6668 18.3337 12.5002 18.3337 7.91683C18.3337 5.38554 16.2816 3.3335 13.7503 3.3335C12.2002 3.3335 10.8298 4.10304 10.0003 5.28091C9.17087 4.10304 7.80045 3.3335 6.25033 3.3335Z" fill="currentColor" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

            </>
      )
}
