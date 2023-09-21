import React from 'react'
import {motion} from 'framer-motion'

const FancyUnderline = () => {
  return (
    <motion.div
      initial={{opacity: 0, y: 50}}
      animate={{opacity: 1, y: 0}}
    //   viewport={{once: true}}
      transition={{duration: 1}}
      className='fancy-underline mx-auto absolute top-1/6 left-1/4 transform -translate-x-1/2 -translate-y-1/2  min-[351px]:inset-0 min-[351px]:-right-[13rem] min-[351px]:top-7 lg:-right-[36rem] xl:-right-[29rem] xl:top-10'
    />
  )
}

export default FancyUnderline