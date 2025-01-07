import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

type NavbarProps = {
      className?: string
}
export default function Navbar(props: NavbarProps) {
      const router = useRouter()

      const [isVisible, setIsVisible] = useState(true); // Untuk kontrol visibilitas navbar
      const [lastScrollY, setLastScrollY] = useState(0); // Untuk menyimpan posisi scroll terakhir

      useEffect(() => {
            const handleScroll = () => {
                  const currentScrollY = window.scrollY;

                  // Jika scroll ke bawah
                  if (currentScrollY > lastScrollY && currentScrollY > 50) {
                        setIsVisible(false);
                  }
                  // Jika scroll ke atas
                  else {
                        setIsVisible(true);
                  }

                  // Update posisi scroll terakhir
                  setLastScrollY(currentScrollY);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                  window.removeEventListener('scroll', handleScroll); // Hapus listener saat komponen unmount
            };
      }, [lastScrollY]);

      return (
            <>
                  <div
                        className={`fixed w-full lg:max-w-[480px] max-w-none mx-auto z-[99] h-[48px] ${props.className ? props.className : 'bg-black'
                              } bottom-0 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'
                              }`}
                  >
                        <div className='w-full h-full grid grid-cols-5'>
                              <Link href={'/main/content'} className={`col-span-1 w-full border-t  h-full flex items-center justify-center ${router.pathname === '/main/content' ? 'text-brand border-brand' : 'text-[#ADAFBB] border-[#E8E6EA]'} hover:opacity-90 duration-200`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <rect x="9.49902" y="4.49756" width="13" height="18" rx="2" fill="currentColor" stroke="#F3F3F3" />
                                          <rect x="0.391602" y="4.48926" width="13" height="18" rx="2" transform="rotate(-15 0.391602 4.48926)" fill="currentColor" stroke="#F3F3F3" />
                                    </svg>
                              </Link>
                              <Link href={'/main/like'} className={`col-span-1 w-full border-t  h-full flex items-center justify-center ${router.pathname === '/main/like' ? 'text-brand border-brand' : 'text-[#ADAFBB] border-[#E8E6EA]'} hover:opacity-90 duration-200`}>
                                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M7.5 4C4.46244 4 2 6.46245 2 9.5C2 15 8.5 20 12 21.1631C15.5 20 22 15 22 9.5C22 6.46245 19.5375 4 16.5 4C14.6398 4 12.9953 4.92345 12 6.3369C11.0047 4.92345 9.36015 4 7.5 4Z" fill="currentColor" stroke="#ADAFBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                          <circle cx="20" cy="6" r="5" fill="currentColor" stroke="#F3F3F3" stroke-width="2" />
                                    </svg>

                              </Link>
                              <Link href={'/main/home'} className={`col-span-1 w-full border-t  h-full flex items-center justify-center ${router.pathname === '/main/home' ? 'text-brand border-brand' : 'text-[#ADAFBB] border-[#E8E6EA]'} hover:opacity-90 duration-200`}>
                                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M2.28571 20C1.65714 20 1.11924 19.7764 0.672 19.3291C0.224 18.8811 0 18.3429 0 17.7143V7.42857C0 7.06667 0.0811426 6.72381 0.243428 6.4C0.404952 6.07619 0.628572 5.80952 0.914286 5.6L7.77143 0.457143C7.98095 0.304762 8.2 0.190476 8.42857 0.114286C8.65714 0.0380951 8.89524 0 9.14286 0C9.39048 0 9.62857 0.0380951 9.85714 0.114286C10.0857 0.190476 10.3048 0.304762 10.5143 0.457143L17.3714 5.6C17.6571 5.80952 17.8811 6.07619 18.0434 6.4C18.205 6.72381 18.2857 7.06667 18.2857 7.42857V17.7143C18.2857 18.3429 18.0621 18.8811 17.6149 19.3291C17.1669 19.7764 16.6286 20 16 20H11.4286V12H6.85714V20H2.28571Z" fill="currentColor" />
                                    </svg>

                              </Link>
                              <Link href={'#'} className='col-span-1 w-full border-t border-[#E8E6EA] h-full flex items-center justify-center text-[#ADAFBB] hover:opacity-90 duration-200'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M22 12C22 17.5229 17.5229 22 12 22C9.01325 22 2 22 2 22C2 22 2 14.5361 2 12C2 6.47715 6.47715 2 12 2C17.5229 2 22 6.47715 22 12Z" fill="currentColor" stroke="#ADAFBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                          <path d="M7 9H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                          <path d="M7 13H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                          <path d="M7 17H12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                              </Link>
                              <Link href={'#'} className='col-span-1 w-full border-t border-[#E8E6EA] h-full flex items-center justify-center text-[#ADAFBB] hover:opacity-90 duration-200'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M12 10C13.933 10 15.5 8.433 15.5 6.5C15.5 4.56701 13.933 3 12 3C10.067 3 8.5 4.56701 8.5 6.5C8.5 8.433 10.067 10 12 10Z" fill="currentColor" stroke="#ADAFBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                          <path d="M3 20.4V21H21V20.4C21 18.1598 21 17.0397 20.5641 16.184C20.1806 15.4314 19.5686 14.8195 18.816 14.436C17.9603 14 16.8402 14 14.6 14H9.4C7.1598 14 6.0397 14 5.18405 14.436C4.43139 14.8195 3.81947 15.4314 3.43598 16.184C3 17.0397 3 18.1598 3 20.4Z" fill="currentColor" stroke="#ADAFBB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                              </Link>
                        </div>
                  </div>
            </>
      )
}
