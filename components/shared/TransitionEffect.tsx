import React from 'react'
import {motion} from "framer-motion"

const TransitionEffect = () => {
    return (
        <>
            <motion.div
                initial={{x: '100%', width: "100%"}}
                animate={{x: '0%', width: "0%"}}
                exit={{x: ["0%", "100%"], width: ["0%", "100%"]}}
                transition={{duration: 0.8, ease: "easeInOut"}}
                className='fixed bottom-0 top-0 right-full w-screen h-screen z-[60] bg-primaryPurpleDark'
            />

            <motion.div
                initial={{x: '100%', width: "100%"}}
                animate={{x: '0%', width: "0%"}}
                transition={{delay: 0.2, duration: 0.8, ease: "easeInOut"}}
                className='fixed bottom-0 top-0 right-full w-screen h-screen z-50 bg-primaryPurpleLight'
            />

            <motion.div
                initial={{x: '100%', width: "100%"}}
                animate={{x: '0%', width: "0%"}}
                transition={{delay: 0.4, duration: 0.8, ease: "easeInOut"}}
                className='fixed bottom-0 top-0 right-full w-screen h-screen z-[45] bg-primaryPink'
            />
        </>
    )
}

export default TransitionEffect