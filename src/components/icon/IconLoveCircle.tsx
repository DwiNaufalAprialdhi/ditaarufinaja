import React from 'react'

type Props = {
      className?: string
}
export default function IconLoveCircle(props: Props) {
      return (
            <>
                  <div className={`w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center ${props.className} bounce3`}>
                        <svg className='w-[30px] h-auto' viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.8351 1.60061C5.98251 0.921299 2.30868 3.49376 1.62937 7.34633C0.399359 14.322 7.5252 22.1173 11.7042 24.3752C16.4034 23.6827 25.7656 18.7948 26.9956 11.8191C27.6749 7.96652 25.1025 4.29266 21.2499 3.61335C18.8907 3.19735 16.5984 4.00081 15.0199 5.5709C14.0736 3.55561 12.1943 2.01661 9.8351 1.60061Z" fill="#EB4853" stroke="#EB4853" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                  </div>
            </>
      )
}
