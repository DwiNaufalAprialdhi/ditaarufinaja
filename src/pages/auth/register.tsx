import Button from '@/components/material/Button'
import Input from '@/components/material/Input'
import InputPassword from '@/components/material/InputPassword'
import ViewMobileMain from '@/components/ui/ViewMobileMain'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function register() {
      return (
            <>
                  <ViewMobileMain>
                        <main className='relative z-[10]'>

                              <section className='flex flex-col items-center justify-center gap-y-[10px]'>
                                    <h2 className='font-normal text-base leading-[24px] text-center text-zinc-800 block z-[2]'>Welcome!</h2>
                                    <h2 className='font-bold text-[24px] leading-[24px] tracking-[-3%] text-center text-brand block z-[2]'>Create an Account</h2>
                              </section>

                              <form action="#" className='lg:mt-[37px] mt-[30px] flex flex-col z-[2]'>
                                    <Input
                                          htmlFor={'email'}
                                          label={'Email Address'}
                                          type={'email'}
                                          name='email'
                                          id='email'
                                          placeholder={'Enter your email'}
                                          className='mb-[14px]'
                                    />
                                    <Input
                                          htmlFor={'username'}
                                          label={'Username'}
                                          type={'text'}
                                          name='username'
                                          id='username'
                                          placeholder={'Enter username'}
                                          className='mb-[14px]'
                                    />
                                    <InputPassword
                                          htmlFor={'password'}
                                          label={'Password'}
                                          name='password'
                                          id='password'
                                          placeholder={'********'}
                                          className='mb-[14px]'
                                    />
                                    <InputPassword
                                          htmlFor={'confirm_password'}
                                          label={'Re-Type Password'}
                                          name='confirm_password'
                                          id='confirm_password'
                                          placeholder={'********'}
                                          className='mb-[14px]'
                                    />
                                    <h2 className='font-normal text-xs leading-[18px] tracking-[-3%] text-center lg:my-[25px] my-[20px]'>
                                          ----------  or  ----------
                                    </h2>
                                    <div className='flex items-center justify-center gap-x-[14px] lg:mb-[97px] mb-[30px]'>
                                          <Link href={'#'} className='block z-[2] w-max h-max hover:scale-105 duration-200'>
                                                <Image src={'/assets/icon/icon-gmail.svg'} alt="icon-gmail" width={40} height={40} className='object-cover w-[40px] h-[40px]' />
                                          </Link>
                                          <Link href={'#'} className='block z-[2] w-max h-max hover:scale-105 duration-200'>
                                                <Image src={'/assets/icon/icon-facebook.svg'} alt="icon-facebook" width={40} height={40} className='object-cover w-[40px] h-[40px]' />
                                          </Link>
                                          <Link href={'#'} className='block z-[2] w-max h-max hover:scale-105 duration-200'>
                                                <Image src={'/assets/icon/icon-mail.svg'} alt="icon-mail" width={40} height={40} className='object-cover w-[40px] h-[40px]' />
                                          </Link>
                                          <Link href={'/auth/phone'} className='block z-[2] w-max h-max hover:scale-105 duration-200'>
                                                <Image src={'/assets/icon/icon-phone.svg'} alt="icon-phone" width={40} height={40} className='object-cover w-[40px] h-[40px]' />
                                          </Link>
                                    </div>
                                    <div className='flex flex-col'>
                                          <Button type='submit' link={'#'} className='z-[2] mb-[15px]'>
                                                Submit
                                          </Button>
                                          <h2 className='font-medium text-sm leading-[21px] tracking-[-3%] text-center text-zinc-800 block z-[2] mb-2'>
                                                Already have an account?
                                          </h2>
                                          <Link href={'/auth/login'} className='font-normal text-sm leading-[21px] tracking-[-3%] text-center text-[#696969] block z-[2]'>
                                                Sign in to your account
                                          </Link>
                                    </div>
                              </form>

                        </main>

                  </ViewMobileMain>
            </>
      )
}
