import React from 'react'
import ViewMobile from './ViewMobile'

type props = {
      children: React.ReactNode
}

export default function ViewMobileMap(props: props) {
      return (
            <>
                  <ViewMobile>
                        <main className='w-full h-auto min-h-screen bg-brand/5 relative'>
                              {props.children}
                        </main>
                  </ViewMobile>
            </>
      )
}
