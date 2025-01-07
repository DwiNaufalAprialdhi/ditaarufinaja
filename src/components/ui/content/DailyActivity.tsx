import ChevronRight from '@/components/icon/ChevronRight';
import Link from 'next/link';
import React from 'react';

type Props = {
      link: string
      children: React.ReactNode
}

export default function DailyActivity(props: Props) {
      return (
            <>
                  <section className="w-full h-auto px-[30px] mb-[10px]">
                        <Link href={props.link} className="flex items-center justify-between">
                              <div className="flex flex-col">
                                    <h2 className="font-semibold text-sm leading-[21px]">Daily Activity</h2>
                                    <p className="font-normal text-xs leading-[18px] text-[#696969] max-w-[300px] lg:max-w-[310px]">
                                          Isi aktifitas dan amalan harianmu disini
                                    </p>
                              </div>
                              <ChevronRight />
                        </Link>
                  </section>

                  {props.children}


            </>
      );
}