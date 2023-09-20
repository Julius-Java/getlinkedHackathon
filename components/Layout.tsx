import React from 'react'
import Navbar from './Navbar'
import GetLinkedText from './GetLinkedText'
import Link from 'next/link'
import Image from 'next/image'
import Footer from './Footer'


const Layout = ({children}: any) => {
    return (
        <div className='-mr-[4px]'>
            <header className='border-b border-slate-700 h-[10vh]'
            >
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
            <Footer />
        </div>
    )
}

export default Layout