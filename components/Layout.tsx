import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({children}: any) => {
    return (
        <div className='-mr-[4px] sm:-mr-4 overflow-hidden'>
            <header className='border-b border-b-slate-700 h-[10vh]'
            >
                <Navbar />
            </header>
            <main className=''>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout