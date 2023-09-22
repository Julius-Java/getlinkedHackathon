import React from 'react'
import LiIcon from './LiIcon'
import { useRef } from 'react'
import { motion } from 'framer-motion'

type TimelineDetailsProps = {
    title: string,
    info: string,
    date: string,
    number: number
    order?: boolean
}

const TimelineDetails = ({title, info, date, number, order}: TimelineDetailsProps) => {
    const iconRef = useRef(null)
    return (
        <li ref={iconRef} className='text-white first:pt-0 py-4 last:pb-0 lg:my-6'>
            <LiIcon reference={iconRef} number={number} />
            <motion.div
                initial={{y: 50}}
                whileInView={{y: 0}}
                transition={{duration: 0.5, type: "spring", bounce: 0.3}}
                className='lg:flex lg:justify-between lg:items-center'
            >
                <div className={`lg:w-[40%] ${order ? "lg:order-2 lg:text-left" : "lg:text-right"} `}>
                    <h4 className='text-sm sm:text-base lg:text-2xl text-primaryPink font-bold'>{title}</h4>
                    <p className='text-xs sm:text-sm lg:text-base py-1'>{info}</p>
                </div>
                <div className={`lg:w-[40%] self-end ${order ? "lg:order-1 lg:text-right" : "lg:text-left"}`}>
                    <span className='text-sm lg:text-2xl text-primaryPink font-semibold lg:block'>{date}</span>
                </div>
            </motion.div>
        </li>
    )
}

export default TimelineDetails