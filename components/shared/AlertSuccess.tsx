import React from 'react'
import checkSVG from "../../public/assets/list terms.svg"
import Image from 'next/image'

type AlertSuccessProps = {
    message: string
}

const AlertSuccess = ({message}: AlertSuccessProps) => {
    return (
        <div className="bg-green-50 border border-green-200 text-sm text-green-600 rounded-md p-2 absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 lg:text-sm" role="alert">
            <div className="flex gap-2 items-center">
                <Image priority src={checkSVG} alt="check" className="w-5 h-5" />
                <span className="font-bold">Success</span>
            </div>
            <p className='text-xs lg:text-sm w-40 mt-1'>{message}</p>
        </div>
    )
}

export default AlertSuccess