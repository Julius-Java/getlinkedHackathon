import React from 'react'
import { clashDisplayBold } from '@/utils/fonts'
import Image from 'next/image'
import sponsorSVG from "../../public/assets/Partner and sponsors section.svg"
import BgGradient from '../shared/BgGradient'

const Sponsors = () => {
    return (
        <div className='max-w-7xl w-[90%] mx-auto relative min-h-[40vh] pt-4 my-8 mb-14'>
            <BgGradient />
            <h3
                style={clashDisplayBold.style}
                className='text-xl text-center md:text-3xl  text-white'
            >
                Partners and Sponsors
            </h3>

            <p className='text-white text-xs sm:text-sm text-center mt-4'>Getlinked Hackathon 1.0 is honored to have the
            following major companies as its partners and 
            sponsors</p>

            <Image
                src={sponsorSVG}
                priority
                alt='Getlinked Hackathon Partners and Sponsors'
                className='w-full mt-12'
            />
        </div>
    )
}

export default Sponsors