import React from 'react'
import Image from 'next/image'
import starLg from "../../public/assets/starColorLgMobile.svg"
import starLight from "../../public/assets/starLight.svg"
import starDark from "../../public/assets/starDark.svg"

const CriteriaStars = () => {
    return (
        <>
            <Image
                src={starLg}
                alt=''
                className='absolute top-0 left-28 w-[13px] h-[17px] animate-pulse lg:w-[30px] lg:h-[36px] lg:top-0 lg:left-14'
            />

            <Image
                src={starDark}
                alt=''
                className='absolute top-40 right-28 w-[12px] h-[14px] animate-pulse lg:w-[26px] lg:h-[32px] lg:top-1/2 lg:left-60'
            />

            <Image
                src={starLight}
                alt=''
                className='absolute bottom-0 right-8 w-[10px] h-[12px] animate-pulse lg:w-[26px] lg:h-[32px] lg:bottom-0 lg:left-[400px] opacity-60'
            />
        </>
    )
}

export default CriteriaStars