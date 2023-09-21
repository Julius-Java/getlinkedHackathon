import React from 'react'
import starDark from "../public/starDark.svg"
import starLight from "../public/starLight.svg"
import Image from 'next/image'

const GuidelineStars = () => {
    return (
        <>
            <Image
                src={starLight}
                alt=''
                className='absolute top-40 left-0 w-[10px] h-[12px] animate-pulse lg:w-[26px] lg:h-[32px] lg:top-80 lg:left-[500px]'
            />

            <Image
                src={starDark}
                alt=''
                className='absolute w-[12px] h-[14px] bottom-60 right-0 animate-pulse lg:bottom-0 lg:top-0 lg:left-40 lg:w-[26px] lg:h-[32px]'
            />

            <Image
                src={starLight}
                alt=''
                className='absolute -bottom-4 left-10 w-[10px] h-[12px] animate-pulse lg:hidden'
            />
        </>
    )
}

export default GuidelineStars