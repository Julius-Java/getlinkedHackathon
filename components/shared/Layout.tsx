import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'


const Layout = ({children}: any) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/assets/hackImg2.png" sizes='32x32' />
            </Head>
            <div className='-mr-[4px] sm:-mr-4 overflow-x-hidden'>
                <header className='border-b border-b-slate-700 h-[10vh]'
                >
                    <Navbar />
                </header>
                <main className=''>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout