import React from 'react'
import Image from 'next/image'
import starSm from "../../public/assets/starColorSmMobile.svg"
import starLg from "../../public/assets/starColorLgMobile.svg"

const OverviewStars = () => {
    return (
        <>
            <Image
                src={starLg}
                alt=''
                className='absolute top-14 left-0 animate-pulse lg:w-[21px] lg:h-[25px]'
            />

            <Image
                src={starSm}
                alt=''
                className='absolute top-80 right-0 animate-pulse lg:w-[30px] lg:h-[36px] lg:top-24'
            />
        </>
    )
}

export default OverviewStars