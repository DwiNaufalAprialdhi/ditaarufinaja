
import ViewMobile from "@/components/ui/ViewMobile";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <ViewMobile>
        <main className="w-full h-full min-h-screen flex items-center justify-center bg-[#F7E8E9CC]">
          <Link href={'/intro'} className="cursor-pointer hover:scale-105 duration-200">
            <Image src={'/assets/images/logo-1.svg'} alt="logo1" width={100} height={100} className="object-cover lg:w-[150px] w-[100px] h-max" />
          </Link>
        </main>
      </ViewMobile>
    </>
  );
}
