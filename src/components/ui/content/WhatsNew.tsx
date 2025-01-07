import React from 'react'

type WhatsNewProps = {
      children?: React.ReactNode
}

export default function WhatsNew(props: WhatsNewProps) {
      return (
            <>
                  <main className='w-full h-max pb-[50px]'>
                        <section className="w-full h-auto px-[30px] mb-[10px]">
                              <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                          <h2 className="font-semibold text-sm leading-[21px]">Whats Now</h2>
                                          <p className="font-normal text-xs leading-[18px] text-[#696969] w-full">
                                                Update berita terbaru seputar pernikahan
                                          </p>
                                    </div>
                                    <div></div>
                              </div>
                        </section>

                        <section className='w-full h-max px-[30px] flex flex-col gap-y-[14px]'>
                              {props.children}
                        </section>
                  </main>
            </>
      )
}
