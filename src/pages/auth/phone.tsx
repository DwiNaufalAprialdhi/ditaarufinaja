/* eslint-disable react-hooks/rules-of-hooks */
import Button from '@/components/material/Button';
import ViewMobileMain from '@/components/ui/ViewMobileMain'
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Phone() {
      const [phone, setPhone] = useState('');

      return (
            <>
                  <ViewMobileMain>
                        <main className='relative z-[10]'>
                              <section className='w-full pt-[97px]'>
                                    <h2 className='font-bold text-[34px] leading-[51px]'>My mobile</h2>
                                    <p className='font-normal text-xs leading-[21px]'>Please enter your valid phone number. We will send you a 4-digit code to verify your account.</p>
                              </section>

                              <section className='flex flex-col gap-[64px] mt-[32px]'>
                                    <PhoneInput
                                          country={'id'}
                                          value={phone}
                                          onChange={() => setPhone(phone)}
                                          containerStyle={{
                                                width: '100%',
                                                borderRadius: '15px',
                                          }}
                                          inputStyle={{
                                                width: '100%',
                                          }}
                                    />
                                    <Button link={'/auth/otp'} >
                                          Continue
                                    </Button>
                              </section>
                        </main>

                  </ViewMobileMain>
            </>
      )
}