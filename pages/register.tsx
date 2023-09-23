import React from 'react'
import Navbar from '@/components/shared/Navbar'
import BgGradient from '@/components/shared/BgGradient'
import RegistrationForm from '@/components/register/RegistrationForm'

const register = () => {
    return (
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
    )
}

export default register