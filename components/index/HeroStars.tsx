import React from 'react'
import darkStarSVG from "../../public/assets/starDark.svg"
import lightStarSVG from "../../public/assets/starLight.svg"
import Image from 'next/image'

const Stars = () => {
    return (
        <>
            <div>
                <Image
                    src={lightStarSVG}
                    alt=''
                    className='w-[15px] h-[15px] -z-10 sm:w-[20px] sm:h-[20px] lg:w-[30px] lg:h-[30px] absolute top-0 left-20 animate-ping lg:animate-none opacity-80'
                />

                <Image
                    src={darkStarSVG}
                    alt=''
                    className='w-[15px] h-[15px] -z-10 sm:w-[25px] sm:h-[25px] lg:w-[30px] lg:h-[30px] absolute top-60 right-0 animate-ping lg:animate-none'
                />

                <Image
                    src={darkStarSVG}
                    alt=''
                    className='w-[10px] h-[10px] -z-10 sm:w-[20px] sm:h-[20px] lg:w-[25px] lg:h-[25px] absolute bottom-80 left-0 animate-ping lg:animate-none'
                />
            </div>
        </>
    )
}

export default Stars