import React from 'react'

type LikeProps = {
      className?: string
      onClick?: () => void
}

export default function Like(props: LikeProps) {
      return (
            <div onClick={props.onClick} className={`${props.className} cursor-pointer hover:scale-105 duration-200 w-[62px] h-[62px] rounded-full flex items-center justify-center bg-white`}>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7275 2.78369L9.60157 9.16428L2.50098 10.1939L7.64473 15.2227L6.41516 22.2155L12.7275 18.8503L19.0412 22.2155L17.8207 15.2227L22.9555 10.1939L15.8943 9.16428L12.7275 2.78369Z" fill="#FF9500" stroke="#FF9500" stroke-width="2" stroke-linejoin="round" />
                  </svg>

            </div>
      )
}
