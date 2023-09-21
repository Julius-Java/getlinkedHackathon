import React from 'react'


const BgGradient = () => {
    return (
        <>
                <div
                    className='absolute left-5 top-0 lg:left-32 w-40 h-40 lg:w-60 lg:h-60 rounded-full filter bg-primaryPurpleLight blur-xl lg:blur-3xl opacity-70 -z-10'
                />

                <div
                    className='absolute bottom-0 right-20 lg:bottom-32  w-40 h-40 lg:w-60 lg:h-60 rounded-full filter bg-primaryPurpleLight blur-3xl opacity-70 -z-10'
                />
        </>
    )
}

export default BgGradient