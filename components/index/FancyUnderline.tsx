import React from 'react'
import {motion} from 'framer-motion'
import underLine from "../../public/assets/underline.svg"
import Image from 'next/image'

const FancyUnderline = () => {
  return (
    <motion.div
      initial={{opacity: 0, y: 50}}
      animate={{opacity: 1, y: 0}}
    //   viewport={{once: true}}
      transition={{duration: 1}}
      className='fancy-underline'
    >
      <Image src={underLine} alt='' />
    </motion.div>
  )
}

export default FancyUnderline