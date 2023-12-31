/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import { clashDisplayBold } from '@/utils/fonts'
import bulb from "../../public/assets/The big idea.svg"
import arrow from "../../public/assets/arrow.svg"
import OverviewStars from './OverviewStars'


const Overview = () => {
    return (
        <div
            className='pt-4 my-8 mb-14 max-w-7xl w-[90%] mx-auto relative md:grid md:grid-cols-12 md:items-center min-h-[60vh] md:gap-4 lg:gap-8'
        >
            <OverviewStars />
            <div className='relative mb-8 mx-auto md:mx-0 md:col-span-6'>
                <Image
                    src={bulb}
                    className='w-full'
                    alt="The big Idea"
                    priority
                />

                <Image
                    src={arrow}
                    alt=''
                    priority
                    className='absolute -bottom-6 left-[98px] xs:left-[130px] md:left-[280px] sm:left-[280px] sm:w-[40px] sm:h-[60px] md:-bottom-16 lg:w-[50px] lg:h-[60px] lg:-bottom-10 lg:left-[450px] xl:left-[600px]'
                />
            </div>
            <div className='col-span-6'>
                <h3
                    style={clashDisplayBold.style}
                    className='text-white text-center xs:text-[20px] md:text-3xl mt-14 md:text-left'>Introduction to getlinked  <span className='text-primaryPink'> techHackathon1.0</span></h3>
                
                <p className='text-[13px]  leading-6 text-white text-center mt-2 md:text-left md:text-sm md:leading-7'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as
                day: to shape the future. Whether you're
                a coding genius, a design maverick, or a
                concept wizard, you'll have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </div>
        </div>
    )
}

export default Overview