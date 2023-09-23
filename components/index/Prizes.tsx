import React from 'react'
import { clashDisplayBold } from '@/utils/fonts'
import Image from 'next/image'
import cupSVG from "../../public/assets/cup.svg"
import rewardSVG from "../../public/assets/Rewards.svg"
import BgGradient from '../shared/BgGradient'

const Prizes = () => {
    return (
        <div className='max-w-7xl w-[90%] mx-auto relative min-h-[60vh] pt-4 my-8 mb-14'>
            <BgGradient />
            <div className='md:max-w-xs md:ml-auto'>
                <h3
                    style={clashDisplayBold.style}
                    className='text-xl text-white text-center md:text-3xl md:text-left'
                >
                    Prizes and <span className='block text-primaryPink'>Rewards</span>
                </h3>
                <p className='text-white text-sm text-center mt-4 md:text-left'>Highlight of the prizes or rewards for winners  and for participants.
                </p>
            </div>
            <div className='mt-8 md:grid md:grid-cols-12 md:gap-6'>
                <Image
                    src={cupSVG}
                    alt='Champion'
                    className='w-full md:col-span-5'
                />

                <Image
                    src={rewardSVG}
                    alt='Rewards'
                    className='w-full mt-12 md:col-span-7'
                />
            </div>
        </div>
    )
}

export default Prizes