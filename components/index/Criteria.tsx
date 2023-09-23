import React from 'react'
import Image from 'next/image'
import criteriaSVG from "../../public/assets/criteria.svg"
import { clashDisplayBold } from '@/utils/fonts'
import BgGradient from '../shared/BgGradient'
import criteria from '@/utils/criteriaInfo'
import CriteriaStars from './CriteriaStars'

const Criteria = () => {
    return (
        <div
            className='pt-2 my-6 mb-14 max-w-7xl w-[90%] mx-auto relative  min-h-[60vh] md:grid md:grid-cols-12 md:items-center'
        >
            <CriteriaStars />
            <BgGradient />
            <div className='col-span-6 relative'>
                <Image
                    src={criteriaSVG}
                    alt='Criteria'
                    priority
                    className='w-full'
                />
                <div
                    className='hidden lg:block lg:absolute lg:-top-8 lg:left-14 bg-gradient-to-r from-primaryPink from-[30%] via-primaryPurpleLight to-primaryPink rounded-full w-40 h-40 -z-20'
                />
            </div>

            {/* Rules and Guidelines */}
            <div className='col-span-6'>
                <h3
                    style={clashDisplayBold.style}
                    className='text-center text-white md:text-left xs:text-[20px] md:text-3xl'
                >
                    Judging Criteria <span className='block text-primaryPink'>Key attributes</span>
                </h3>

                {/* Criteria */}
                <div>
                    {
                        criteria.map(({title, text}, _) => (
                            <article
                                key={title}
                                className='text-white text-center md:text-left my-2'
                            >
                                <p
                                    className='text-[13px] leading-6 md:text-sm md:leading-7'
                                >
                                    <span className='font-semibold text-primaryPinkLight'>{title}</span> {text}
                                </p>
                            </article>
                        ))
                    }
                    <div className='flex flex-col justify-center items-center md:items-start'>
                        <button className='cta-btn mt-4 text-white lg:!py-4'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Criteria