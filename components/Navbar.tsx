import React from 'react'
import { clashDisplayBold } from '@/utils/fonts'
import Hamburger from './Hamburger'

import { Inter } from 'next/font/google'

import Link from 'next/link'

import { useState } from 'react'

const inter = Inter({
    subsets: ['latin'],
    weight: ["400", "700"]
})


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
    <nav className='h-[10vh] px-4 flex justify-between items-center border-b border-slate-700 relative'>
        <p
            className={"text-white"}
            style={clashDisplayBold.style}>
                get<span className='text-primaryPink'>linked</span>
        </p>
        <Hamburger
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
        />
        <div
            className={`absolute ${menuOpen ? "top-0" : "-top-[500px]"}  left-0 py-10 px-10 w-full bg-primaryPurpleDark transition-all duration-300`}
        >
            <ul
                className={`${inter.className} text-white flex flex-col gap-4 mt-8`}
            >
                <li><Link href={'#timeline'}>Timeline</Link></li>
                <li><Link href={'#overview'}>Overview</Link></li>
                <li><Link href={'#faqs'}>FAQs</Link></li>
                <li><Link href={"/"}>Contact</Link></li>
                <button className='self-start cta-btn mt-4'>Register</button>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar