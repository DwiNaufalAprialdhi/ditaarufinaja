import React from 'react'

type MatchProps = {
      className?: string
      onClick?: () => void
}

export default function Match(props: MatchProps) {
      return (
            <div onClick={props.onClick} className={`${props.className} cursor-pointer hover:scale-105 duration-200 w-[81px] h-[81px] rounded-full flex items-center justify-center bg-[#EB4853]`}>
                  <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="41.7273" height="41.7273" transform="translate(0.455078 0.63623)" fill="#EB4853" />
                        <path d="M13.4951 7.59082C8.2139 7.59082 3.93262 11.8721 3.93262 17.1533C3.93262 26.7158 15.2338 35.409 21.319 37.4312C27.4042 35.409 38.7053 26.7158 38.7053 17.1533C38.7053 11.8721 34.424 7.59082 29.1428 7.59082C25.9087 7.59082 23.0495 9.19636 21.319 11.6538C19.5884 9.19636 16.7292 7.59082 13.4951 7.59082Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

            </div>
      )
}
