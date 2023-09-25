import React from 'react'
import Navbar from '@/components/shared/Navbar'
import BgGradient from '@/components/shared/BgGradient'
import RegistrationForm from '@/components/register/RegistrationForm'
import TransitionEffect from '@/components/shared/TransitionEffect'

const register = () => {
    return (
        <>
            <TransitionEffect />
            <div
                className='relative'
            >
                <BgGradient />
                <header
                    className='hidden md:block'
                >
                    <Navbar />
                </header>
                <main className=''>
                    <RegistrationForm />
                </main>
            </div>
        </>
    )
}

export default register