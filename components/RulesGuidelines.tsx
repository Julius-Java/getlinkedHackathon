/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ladySVG from "../public/ladySVG.svg"
import Image from 'next/image'
import BgGradient from './BgGradient'
import GuidelineStars from './GuidelineStars'
import { clashDisplayBold } from '@/utils/fonts'


const RulesGuidelines = () => {
    return (
        <div className='pt-2 my-6 mb-14 max-w-5xl w-[90%] mx-auto relative md:grid md:grid-cols-12 items-center'>
            <BgGradient />
            <GuidelineStars />
            <div className='max-w-xs mx-auto md:col-span-6 order-2'>
                <Image
                    src={ladySVG}
                    alt='Rules and Guidelines'
                    className='w-full'
                />
            </div>
            <div className='text-white md:col-span-6 order-1'>
                <h3
                    className='text-[20px] w-[142px] md:w-[170px] sm:w-full mx-auto md:mx-0 text-center md:text-[32px]'
                    style={clashDisplayBold.style}
                >
                        Rules and <span className='text-primaryPink'>Guidelines</span>
                </h3>

                <p className='text-[13px] md:text-sm text-center mt-2 md:text-left'>
                    Our tech hackathon is a melting pot of 
                    visionaries, and its purpose is as clear as day:
                    to shape the future. Whether you're a coding
                    genius, a design maverick, or a concept 
                    wizard, you'll have the chance to transform 
                    your ideas into reality. Solving real-world 
                    problems, pushing the boundaries of 
                    technology, and creating solutions that can 
                    change the world, that's what we're all about!
                </p>
            </div>
        </div>
    )
}

export default RulesGuidelines