import React from 'react'
import Navbar from './Navbar'


const Layout = ({children}: any) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div
                    className='absolute w-20 h-20 rounded-full filter bg-primaryPurpleLight blur-xl opacity-70 -z-10 animate-pulse'
                />

                <div
                    className='absolute bottom-0 right-0 w-20 h-20 rounded-full filter bg-primaryPurpleLight blur-xl opacity-70 -z-10 animate-pulse'
                />

                <div
                    className='absolute bottom-1/2 -right-4 w-20 h-20 rounded-full filter bg-primaryPurpleLight blur-xl opacity-70 -z-10 animate-pulse'
                />
                {children}
            </main>
            <footer>
                <p>Footer</p>
            </footer>
        </>
    )
}

export default Layout