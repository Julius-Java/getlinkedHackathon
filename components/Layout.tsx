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
            <main className='max-w-6xl w-[90%] mx-auto'>
                {/* <div
                    className='absolute left-0 top-0 lg:left-32 w-30 h-30 lg:w-60 lg:h-60 rounded-full filter bg-primaryPurpleLight blur-3xl opacity-70 -z-10'
                />

                <div
                    className='absolute bottom-32 right-0 w-20 h-20 lg:w-60 lg:h-60 rounded-full filter bg-primaryPurpleLight blur-3xl opacity-70 -z-10'
                /> */}
{/* 
                <div
                    className='absolute bottom-1/2 -right-4 w-20 h-20 rounded-full filter bg-primaryPurpleLight blur-xl opacity-70 -z-10'
                /> */}
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout