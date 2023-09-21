import React from 'react'
import footerSocials from '@/utils/footerSocials'
import footerNavLinks from '@/utils/footerNavLinks'
import locationSVG from "../../public/assets/location.svg"
import callSVG from "../../public/assets/call.svg"
import GetLinkedText from './GetLinkedText'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='min-h-[100vh] bg-primaryPurpleDark py-4 xl:pt-14  text-slate-200 text-sm '>
        <div className='max-w-5xl w-[90%] mx-auto md:grid md:grid-cols-12 md:gap-6 xl:gap-10'>
            <div className='md:col-span-6  md:flex md:flex-col'>
                <GetLinkedText />
                <p className='mt-4 text-xs'>Getlinked Tech Hackathon is a technology
                innovation program established by a group
                of organizations with the aim of showcasing
                young and talented individuals in the field
                of technology</p>
                {/* Privacy Policy & Terms */}
                <div className='flex  gap-3 font-bold mt-4 md:mt-16 xl:mt-20'>
                    <div className='border-r-2 border-primaryPink pr-3'>
                        <Link href={"#"}>Terms of use</Link>
                    </div>
                    <div>
                        <Link href={"#"}>Privacy policy</Link>
                    </div>
                </div>
            </div>

            <div className='md:col-span-6 md:justify-self-end xl:col-span-3 xl:justify-self-auto'>
                {/* Footer Navigation */}
                <nav className='mt-8 md:mt-4'>
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

                {/* Footer Socials */}
                <div className='mt-8 md:mt-4 font-bold flex items-center gap-4'>
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
            </div>

            {/* Contact Info */}
            <div className='mt-8 md:mt-4 md:col-span-12 xl:col-span-3'>
                <h2 className='text-sm font-semibold text-primaryPink'>Contact us</h2>
                <div className='flex items-center gap-3 mt-3'>
                    <Link href={"tel:+23467981819"} target='_blank'>
                        <Image src={callSVG} alt='Call GetLinked'/>
                    </Link>
                    <p className='text-xs'>+234 679 81819</p>
                </div>
                <div className='flex items-center gap-3 mt-3 relative group'>
                    <Link href={"https://maps.app.goo.gl/hGreL7VcXmDZvxnb7"} target='_blank'>
                        <Image src={locationSVG} alt='Locate GetLinked'/>
                        <iframe
                            className='border-none w-[150px] h-[150px] hidden absolute -top-40 left-0 group-hover:block'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.109925887565!2d3.3818752749074554!3d6.507767393484539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf3fae871f1%3A0x33fc1ca3c387cf64!2s27%20Alara%20St%2C%20Sabo%20yaba%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1695201681491!5m2!1sen!2sng" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Link>
                    <p className='text-xs w-[50%]'>
                        27, Alara Street
                        Yaba 100012
                        Lagos State
                    </p>
                </div>
            </div>

            <div className='text-center mt-8 md:col-span-12 xl:mt-12'>
                <p className='text-xs'>All rights reserved. &copy; getlinked Ltd.</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer