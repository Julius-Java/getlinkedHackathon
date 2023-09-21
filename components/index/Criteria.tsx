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
            <div className='col-span-6'>
                <Image
                    src={criteriaSVG}
                    alt='Criteria'
                    className='w-full'
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
                    <button className='cta-btn mt-4 text-white'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Criteria