import React from 'react'
import { clashDisplayBold } from '@/utils/fonts'
import FaqAccordion from './FaqAccordion'
import Image from 'next/image'
import thinkerSVG from "../../public/assets/thinker.svg"

const Faqs = () => {
    return (
        <div
            className='pt-2 my-6 mb-14 max-w-7xl w-[90%] mx-auto relative  min-h-[60vh] md:grid md:grid-cols-12 items-center'
        >
            <div className='md:col-span-5'>
                <h3
                    style={clashDisplayBold.style}
                    className='text-center text-white md:text-left xs:text-[20px] md:text-3xl'
                >
                    Frequently Asked <span className='block text-primaryPink'>Questions</span>
                </h3>
                <p className='text-xs sm:text-sm md:text-left text-center lg:w-[75%] text-white mt-4 leading-5 xs:leading-9'>We got answers to the questions that you might
                want to ask about <span className='font-semibold'>getlinked Hackathon 1.0</span></p>
                <div>
                    <FaqAccordion />
                </div>
            </div>

            <div className='mt-8 md:mt-0 md:col-span-7'>
                <Image
                    src={thinkerSVG}
                    alt='Frequently Asked Questions'
                    className='w-full'
                />
            </div>

        </div>
    )
}

export default Faqs
