import React from 'react'

type DislikeProps = {
      className?: string
      onClick?: () => void
}

export default function Dislike(props: DislikeProps) {
      return (
            <div onClick={props.onClick} className={`${props.className} cursor-pointer hover:scale-105 duration-200 w-[62px] h-[62px] rounded-full flex items-center justify-center bg-[#1E1E1E]`}>
                  <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24.5455" height="24.5455" transform="translate(0.635742 0.227539)" fill="#1E1E1E" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.07201 6.66332C7.47141 6.26392 8.11897 6.26392 8.51837 6.66332L12.9088 11.0538L17.2993 6.66332C17.6987 6.26392 18.3462 6.26392 18.7456 6.66332C19.145 7.06272 19.145 7.71027 18.7456 8.10967L14.3552 12.5001L18.7456 16.8906C19.145 17.29 19.145 17.9375 18.7456 18.3369C18.3462 18.7363 17.6987 18.7363 17.2993 18.3369L12.9088 13.9465L8.51837 18.3369C8.11897 18.7363 7.47141 18.7363 7.07201 18.3369C6.67261 17.9375 6.67261 17.29 7.07201 16.8906L11.4625 12.5001L7.07201 8.10967C6.67261 7.71027 6.67261 7.06272 7.07201 6.66332Z" fill="#FEF2F3" stroke="#FEF2F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
            </div>
      )
}
