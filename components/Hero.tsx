import React from 'react'
import FancyUnderline from './FancyUnderline'
import Image from 'next/image'
import { clashDisplayBold } from '@/utils/fonts'
import chainSVG from "../public/chain-9365116-7621444.svg"
import FireSVG from "../public/fire.svg"
import creativeSVG from "../public/Creative 1.svg"
import heroImg from "../public/hackImg2.png"
import BgGradient from './BgGradient'
import Stars from './Stars'


import { Unica_One } from 'next/font/google'

const unicaOne = Unica_One({
    subsets: ['latin'],
    weight: ["400"]
})

const Hero = () => {
    return (
        <section className='pt-8 my-8 relative max-w-5xl w-[90%] mx-auto'>
            <BgGradient />
            <Stars />
            <div className='relative max-w-sm md:max-w-3xl mx-auto lg:-mr-0 mb-8'>
                <h2
                    className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold italic text-white text-center lg:text-right'
                >
                    Igniting a Revolution in HR Innovation
                </h2>
                <FancyUnderline />
            </div>
            <div className='lg:grid lg:grid-cols-12 lg:gap-4'>
                {/* Info & CTA */}
                <div className='col-span-6'>
                    <div
                        className='xs:flex xs:max-w-[300px] max-w-xs mx-auto w-[90%] relative mt-16 lg:mb-8 lg:content-start lg:max-w-sm lg:mx-0'
                    >
                        <h1
                            style={clashDisplayBold.style}
                            className='text-3xl text-white text-center lg:text-left sm:text-4xl lg:text-6xl'
                        >
                            getlinkedTech Hackathon
                            <span className='text-primaryPink'> 1.0</span>
                        </h1>
                        <div
                            className='absolute -top-4 right-5 xs:-top-5 xs:right-10 sm:right-16 lg:-top-10 lg:-right-8'
                        >
                            <Image
                                className='w-[25px] h-[25px] sm:h-[30px] sm:w-[30px] lg:w-[50px] lg:h-[50px] animate-pulse'
                                src={creativeSVG}
                                alt='Game Changing Ideas'
                            />
                        </div>
                        <div
                            className='flex place-content-center flex-grow mt-2 self-end xs:absolute xs:bottom-0 xs:-right-4 xsL:-right-2 sm:-right-12 md:-right-14 lg:bottom-0 lg:-right-28'
                        >
                            <span className='block'>
                                <Image
                                    src={chainSVG}
                                    className='w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] lg:w-[40px] lg:h-[40px]'
                                    alt='Connect With Other Great Minds'
                                />
                            </span>
                            <span className='block'>
                                <Image
                                    src={FireSVG}
                                    className='w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] lg:w-[40px] lg:h-[40px]'
                                    alt='Experience Creative Sparks'
                                />
                            </span>
                        </div>
                    </div>

                    <p className='text-[13px] text-center text-white my-4  max-w-xs mx-auto lg:text-[19px] lg:max-w-lg lg:text-left lg:mx-0'>Participate in getlinked tech Hackathon 
                    2023 stand a chance to win a Big prize</p>
                    <div className='flex flex-col justify-center items-center lg:items-start'>
                        <button className='text-white w-40 mt-4 cta-btn !py-3 !px-8'>Register</button>
                    </div>

                    <div className={`${unicaOne.className} text-white text-[30px] xs:text-[48px] flex items-center justify-center gap-4 mt-6 lg:justify-start`}>
                        <p>00 <sub className='text-base font-semibold'>H</sub></p>
                        <p>00 <sub className='text-base font-semibold'>M</sub></p>
                        <p>00 <sub className='text-base font-semibold'>s</sub></p>
                    </div>
                </div>

                {/* Image */}
                <div className='flex items-center justify-center mt-6 lg:col-span-6 relative'>
                    <Image
                        src={heroImg}
                        alt='Explore beyond your Imagination'
                        className='w-80 lg:w-full'
                    />
                    <div className='absolute w-full h-full bg-primaryPurpleDark opacity-40 filter blur-lg' />
                </div>
            </div>
        </section>
    )
}

export default Hero