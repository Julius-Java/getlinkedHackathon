import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({children}: any) => {
    return (
        <div className='-mr-[4px]'>
            <header className='border-b border-slate-700 h-[10vh]'
            >
                <Navbar />
            </header>
            <main className='max-w-5xl w-[90%] mx-auto'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout