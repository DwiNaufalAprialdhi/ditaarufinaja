import Image from 'next/image';
import React from 'react';

type CardLikeProps = {
      images: string
      name: string
      children?: React.ReactNode
}

export default function CardLike(props: CardLikeProps) {
      return (
            <>
                  <div className="col-span-1 w-full max-h-[200px] h-full rounded-[15px] overflow-hidden relative">
                        <Image
                              src={props.images}
                              alt="discover-1"
                              width={140}
                              height={200}
                              className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 w-full">
                              <h2 className="font-bold text-base leading-[24px] px-4 text-white">
                                    {props.name}
                              </h2>
                              {props.children}
                        </div>
                  </div>
            </>
      );
}