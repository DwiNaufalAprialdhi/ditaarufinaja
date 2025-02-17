import React from 'react'

type Props = {
      className?: string
}

export default function ChevronRight(props: Props) {
      return (
            <>
                  <svg className={`${props.className ?? 'w-6 h-auto'}`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.79289 5.79289C9.18342 5.40237 9.81658 5.40237 10.2071 5.79289L16.2071 11.7929C16.5976 12.1834 16.5976 12.8166 16.2071 13.2071L10.2071 19.2071C9.81658 19.5976 9.18342 19.5976 8.79289 19.2071C8.40237 18.8166 8.40237 18.1834 8.79289 17.7929L14.0858 12.5L8.79289 7.20711C8.40237 6.81658 8.40237 6.18342 8.79289 5.79289Z" fill="#27272A" />
                  </svg>
            </>
      )
}
