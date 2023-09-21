import React from 'react'
import { clashDisplayBold } from '@/utils/fonts'
import Link from 'next/link'


const GetLinkedText = () => {
    return (
        <Link href={"/"}>
            <p
                className={"text-white md:text-lg lg:text-xl"}
                style={clashDisplayBold.style}>
                    get<span className='text-primaryPink'>linked</span>
            </p>
        </Link>
    )
}

export default GetLinkedText