import React from 'react'
import { clashDisplayBold } from '@/utils/fonts'


const GetLinkedText = () => {
    return (
        <p
            className={"text-white md:text-lg lg:text-xl"}
            style={clashDisplayBold.style}>
                get<span className='text-primaryPink'>linked</span>
        </p>
    )
}

export default GetLinkedText