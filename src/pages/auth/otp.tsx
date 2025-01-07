import ViewMobileMain from '@/components/ui/ViewMobileMain'
import React, { useState } from 'react'
import Countdown, { CountdownRenderProps } from 'react-countdown';

// Custom renderer function with proper typing
const countdownRenderer = ({ seconds, completed }: CountdownRenderProps) => {
      // Render only the seconds as 4-digit format (with padding if necessary)
      if (completed) {
            return <span className="font-bold text-[34px] leading-[51px] text-zinc-800 text-center">00:00</span>; // Show "0000" when the countdown is complete
      } else {
            // Pad the seconds to ensure it's always 4 digits in 00: format
            const paddedSeconds = seconds.toString().padStart(5, '00:');
            return <span className="font-bold text-[34px] leading-[51px] text-zinc-800 text-center">{paddedSeconds}</span>;
      }
}

export default function Otp() {

      const [otp, setOtp] = useState(['', '', '', '']);

      // Handle OTP input change
      const handleOtpChange = (index: number, value: string) => {
            if (/^\d$/.test(value) || value === '') {  // Only allow numeric input or empty
                  const newOtp = [...otp];
                  newOtp[index] = value;
                  setOtp(newOtp);
            }
      };

      return (
            <>
                  <ViewMobileMain>
                        <form action={'#'} className='w-full mt-[97px] flex flex-col items-center justify-center'>
                              <Countdown
                                    date={Date.now() + 10000}  // Countdown for 10 seconds
                                    renderer={countdownRenderer} // Use the custom renderer
                              />
                              <p className='font-normal text-sm leading-[21px] text-center block w-full max-w-[200px] text-[#000000B2] mt-2'>
                                    Type the verification code
                                    we’ve sent you
                              </p>

                              {/* OTP Inputs */}
                              <div className="flex justify-center gap-x-[10px] mt-[63px]">
                                    {otp.map((digit, index) => (
                                          <input
                                                key={index}
                                                type="text"
                                                value={digit}
                                                maxLength={1}
                                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                                className={`w-[67px] h-[67px] text-center text-[34px] font-bold border-2 border-[#E8E6EA] rounded-[15px] outline-none ${digit ? 'bg-brand text-white border-brand' : ''}`}
                                          />
                                    ))}

                              </div>

                              <h2 className='font-semibold text-sm leading-[24px] text-center mt-[60px] cursor-pointer text-brand'>Send again</h2>

                        </form>
                  </ViewMobileMain>
            </>
      )
}