import React from 'react'
import { clashDisplayBold } from '@/utils/fonts'
import Image from 'next/image'
import checkSVG from "../../public/assets/list terms.svg"
import privacySVG from "../../public/assets/privacy.svg"
import BgGradient from '../shared/BgGradient'

const PrivacyPolicy = () => {
    return (
        <div
            className='max-w-7xl w-[90%] mx-auto relative min-h-[40vh] pt-4 my-8 mb-14 md:grid md:grid-cols-12 md:gap-6 md:items-center'
        >
            <BgGradient />
            <div className='md:col-span-6'>
                <h3
                    style={clashDisplayBold.style}
                    className='text-xl text-center md:text-left md:text-3xl  text-white'
                >
                    Privacy Policy and <span className='text-primaryPink block'>Terms</span>
                </h3>
                <span className='text-slate-400 text-xs md:text-sm md:text-left text-center block mt-1'>Last updated on September 12, 2023</span>
                <p className='text-white text-xs md:text-sm text-center leading-5 mt-4 md:text-left'>Below are our privacy & policy, which outline a 
                lot of goodies. it’s our aim to always take of our 
                participant</p>
                <article className='py-10 px-5 border border-primaryPink rounded-lg mt-8'>
                    <p className='text-white text-xs md:text-sm text-center leading-6 md:text-left md:leading-7'>At getlinked tech Hackathon 1.0, we 
                    value your privacy and are committed 
                    to protecting your personal information.
                    This Privacy Policy outlines how we collect,
                    use, disclose, and safeguard your data 
                    when you participate in our tech hackathon 
                    event. By participating in our event, you 
                    consent to the practices described in this 
                    policy.</p>

                    <h4 className='text-[13px] md:text-base leading-4 text-primaryPink font-bold mt-6'>Licensing Policy</h4>
                    <p className='text-xs md:text-sm md:text-left font-bold text-center text-white mt-4'>Here are terms of our Standard License:</p>
                    <div className='mt-6'>
                        <div className='mb-5 flex items-center gap-4'>
                            <Image
                                src={checkSVG}
                                alt='Privacy Policy'
                                className='self-start'
                            />

                            <p className='text-xs md:text-sm text-white'>The Standard License grants you a 
                            non-exclusive right to navigate and 
                            register for our event</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Image
                                src={checkSVG}
                                alt='Privacy Policy'
                                className='self-start'
                            />

                            <p className='text-xs md:text-sm text-white'>You are licensed to use the item 
                            available at any free source sites, for 
                            your project developement</p>
                        </div>
                        <div className='flex items-center justify-center mt-5'>
                            <button className='cta-btn text-white py-2 px-4 md:py-3 md:px-6 text-sm font-semibold'>Read More</button>
                        </div>
                    </div>
                </article>
            </div>

            <div className='md:col-span-6'>
                <Image
                    src={privacySVG}
                    alt='Privacy Policy'
                    className='w-full mt-12'
                />
            </div>
        </div>
    )
}

export default PrivacyPolicy