import React from 'react'
import Hamburger from './Hamburger'
import GetLinkedText from './GetLinkedText'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import mainNavLinks from '@/utils/mainNavLinks'

import { useRouter } from 'next/router'


const inter = Inter({
    subsets: ['latin'],
    weight: ["400", "700"]
})


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const router = useRouter()


    return (
    <nav
        className='h-[10vh] max-w-7xl w-[90%] mx-auto flex justify-between items-center  relative'
    >

        <GetLinkedText />

        <Hamburger
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
        />
        <div
            className={`absolute ${menuOpen ? "top-0" : "-top-[500px]"} z-20  -left-8 py-10 px-10  w-[120%] sm:left-0 bg-primaryPurpleDark transition-all duration-300 sm:top-0 sm:bg-transparent sm:relative sm:p-0 sm:ml-auto sm:w-auto`}
        >
            <ul
                className={`${inter.className} text-white flex flex-col gap-4 mt-8 sm:flex-row sm:items-center sm:m-0 sm:gap-6 sm:text-sm`}
            >
                {
                    mainNavLinks.map(({name, href}, _) => (
                        <Link href={href} key={name}>
                            {name}
                        </Link>
                    ))
                }
                <button
                    className='self-start cta-btn mt-4 md:ml-6 sm:m-0 xl:py-4 xl:px-12'
                    onClick={() => router.push('/register')}
                >
                        Register
                </button>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar