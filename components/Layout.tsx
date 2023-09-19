import React from 'react'
import Navbar from './Navbar'
import GetLinkedText from './GetLinkedText'
import Link from 'next/link'
import Image from 'next/image'
import footerSocials from '@/utils/footerSocials'
import footerNavLinks from '@/utils/footerNavLinks'


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
            <footer className='min-h-[10vh] bg-primaryPurpleDark py-4  text-slate-200 text-sm'>
                <div className='max-w-xl w-[90%] mx-auto'>
                    <GetLinkedText />
                    <p className='mt-4 text-xs'>Getlinked Tech Hackathon is a technology
                    innovation program established by a group 
                    of organizations with the aim of showcasing 
                    young and talented individuals in the field 
                    of technology</p>
                    <div className='flex gap-3 font-bold mt-4'>
                        <div className='border-r-2 border-primaryPink pr-3'>
                            <Link href={"#"}>Terms of use</Link>
                        </div>
                        <div>
                            <Link href={"#"}>Privacy policy</Link>
                        </div>
                    </div>
                    <nav className='mt-4'>
                        <h2 className='text-primaryPink font-bold'>Useful Links</h2>
                        <ul className='flex flex-col gap-3 mt-2 font-semibold'>
                            {
                                footerNavLinks.map(({name, href}, index) => (
                                    <li key={name}>
                                        <Link href={href}>{name}</Link>
                                    </li>
                                ))
                            }
                            <li>
                                <Link href={"#"}>Register</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='mt-4 font-bold flex items-center gap-4'>
                        <p className='text-xs text-primaryPink'>Follow us</p>
                        <div className='flex gap-5 items-center'>
                            {
                                footerSocials.map(({name, href, icon}, index) => (
                                    <Link href={href} key={name}>
                                        <Image src={icon} alt='name' />
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        h2
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout