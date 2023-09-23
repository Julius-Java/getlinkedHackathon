import React from 'react'
import Image from 'next/image'
import congratulationSVG from '../../public/assets/congratulation.svg'
// import useRouter hook
import { useRouter } from 'next/router'

const Congratulations = () => {
    // useRouter hook
    const router = useRouter()
    return (
        <div className='h-screen w-full absolute -top-4 left-0 bg-primaryPurpleDark bg-opacity-80 z-40 '>
            <div
                className='max-w-lg w-[90%] mt-32 mx-auto text-white flex flex-col justify-center border rounded-md border-primaryPink px-6 py-8'
            >
                <Image
                    src={congratulationSVG}
                    alt='Congratulations'
                    className='w-full animate-bounce'
                />

                <h3 className='font-semibold text-center text-base md:text-lg max-w-xs mx-auto'>
                    Congratulations you have been successfully registered!
                </h3>

                <p className='text-xs text-center mt-4 max-w-xs mx-auto'>Yes, it was easy and you did it!
                check your mail box for next step 😉</p>

                <div
                    className='flex justify-center mt-6 md:justify-start'
                >
                    <button
                        type='submit'
                        className='cta-btn text-white py-3 px-6 md:py-3 md:px-7 text-sm font-semibold w-[90%] mx-auto'
                        onClick={() => router.push('/')}
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Congratulations