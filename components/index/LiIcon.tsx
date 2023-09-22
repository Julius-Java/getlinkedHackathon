import React from 'react'
import { useScroll, motion } from 'framer-motion'

type LiIconProps = {
    reference: React.MutableRefObject<HTMLLIElement | null>
    number: number
}


const LiIcon = ({reference, number}: LiIconProps) => {
    const {scrollYProgress} = useScroll({
        target: reference,
        offset: ["center end", "center center"]
    })

    return (
            <figure className='absolute -left-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 stroke-primaryPink stroke-1'>
                <svg
                    className='-rotate-[360deg] hidden xs:block lg:w-[80px] lg:h-[80px] xs:w-[70px] xs:h-[70px] text-white'
                    width={"75"}
                    height={"75"}
                    viewBox='0 0 100 100'
                >
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="80%" style={{stopColor: "#D434FE"}} />
                            <stop offset="150%" style={{stopColor:"#903AFF"}} />
                        </linearGradient>
                    </defs>
                    <circle cx={75} cy={50} r={20} className='stroke-primaryPink stroke-1 fill-none' />
                    <motion.circle
                        cx={75}
                        cy={50}
                        r={20}
                        style={{
                            pathLength: scrollYProgress
                        }}
                        className='stroke-[5px] lg:stroke-[6px] fill-white'
                    />
                    <g>
                        <circle cx={75} cy={50} r={15} className='stroke-2 animate-pulse' fill='url(#gradient)' />
                        <text
                            x="75"
                            y="50"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="font-bold text-xl text-center stroke-none"
                            fill='white'
                        >
                            {number}
                        </text>
                    </g>
                </svg>
            </figure>
        )
}

    export default LiIcon
    //     <figure
    //         className='absolute left-0 stroke-white stroke-2'
    //     >
    //         <svg
    //             width={75}
    //             height={75}
    //             viewBox='0 0 100 100'
    //             xmlns="http://www.w3.org/2000/svg"
    //         >
                // <defs>
                //     <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                //         <stop offset="70%" style={{stopColor: "#D434FE"}} />
                //         <stop offset="100%" style={{stopColor:"#903AFF"}} />
                //     </linearGradient>
                // </defs>
    //             <circle cx={75} cy={50} r={20} className='stroke-primaryPink stroke-1 fill-none' />
    //             <motion.circle cx={75} cy={50} r={20}
    //                 className='stroke-[5px] fill-white'
    //                 style={{
    //                     pathLength: scrollYProgress,
    //                 }}
    //             />
    // -            <g>
    //                 <circle
    //                     cx={75}
    //                     cy={50}
    //                     r={10}
    //                     className='stroke-2'
    //                     fill='url(#gradient)'
    //                 />
                    // <text
                    //     x="75"
                    //     y="50"
                    //     textAnchor="middle"
                    //     dominantBaseline="middle"
                    //     className="text-white font-bold text-xs"
                    // >
                    //     1
                    // </text>
    //             </g>
    //         </svg>
    //     </figure>