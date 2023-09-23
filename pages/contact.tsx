import React from 'react'
import Navbar from '@/components/shared/Navbar'
import BgGradient from '@/components/shared/BgGradient'
import ContactForm from '@/components/contact/ContactForm'
import TransitionEffect from '@/components/shared/TransitionEffect'
import { clashDisplaySemibold } from '@/utils/fonts'

const contact = () => {
  return (
    <>
      <TransitionEffect />
      <div className='relative'>
        <header
          className='hidden md:block'
        >
          <Navbar />
        </header>
        <BgGradient />
        <main className=''>
          <ContactForm />
        </main>
      </div>
    </>
  )
}

export default contact