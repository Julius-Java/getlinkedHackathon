import React from 'react'
import {AiOutlineLeft} from 'react-icons/ai'
import { clashDisplaySemibold } from '@/utils/fonts'
import { useForm } from 'react-hook-form'
import footerSocials from '@/utils/footerSocials'
import Image from 'next/image'
import Link from 'next/link'

type ContactFormValues = {
    teamName: string
    topic: string
    email: string
    message: string
}


const ContactForm = () => {
    const {register, handleSubmit, formState: {errors}, reset, setValue, } = useForm<ContactFormValues>({mode: "onSubmit"})

    const formSubmit = (data: ContactFormValues) => {
        console.log(data)
    }

    return (
        <div className='max-w-7xl w-[90%] mx-auto relative min-h-[40vh] pt-2 my-4 mb-14'>
            <button
                className='border-2 border-primaryPink rounded-full p-2 md:hidden'
            >
                <AiOutlineLeft color='white' size={10}
                />
            </button>
            <div
                className=' mt-14 md:grid md:grid-cols-12 md:items-center gap-6'
            >
                <div className='md:col-span-6 order-2'>
                    <h3
                        style={clashDisplaySemibold.style}
                        className='text-xl text-left  text-primaryPink'
                    >
                        Question or need assistance?
                        <span className='block'>Let us know about it</span>
                    </h3>
                    <p className='text-white text-xs md:text-sm md:hidden mt-2'>Email us below to any question related
                    to our event</p>
                    <form
                        className='mt-8'
                        onSubmit={handleSubmit((data: ContactFormValues) => formSubmit(data))}
                    >
                        <div className="my-3">
                            <input
                                type="text"
                                placeholder="Team's Name"
                                className='placeholder:font-semibold bg-transparent border border-white rounded-sm w-full py-2 px-4 text-white'
                                {
                                    ...register('teamName', {
                                        required: "Team Name is required",
                                    })
                                }
                            />
                            <span className='text-xs font-semibold text-red-500'>{errors.teamName?.message}</span>
                        </div>
                        <div className="my-3">
                            <input
                                type="text"
                                placeholder="Topic"
                                className='placeholder:font-semibold bg-transparent border border-white rounded-sm w-full py-2 px-4 text-white'
                                {
                                    ...register('topic', {
                                        required: "Topic is required",
                                    })
                                }
                            />
                            <span className='text-xs font-semibold text-red-500'>{errors.topic?.message}</span>
                        </div>
                        <div className="my-3">
                            <input
                                type="email"
                                placeholder="Email"
                                className='placeholder:font-semibold bg-transparent border border-white rounded-sm w-full py-2 px-4 text-white'
                                {
                                    ...register('email', {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Valid Email is required"
                                        }
                                    })
                                }
                            />
                            <span className='text-xs font-semibold text-red-500'>{errors.email?.message}</span>
                        </div>
                        <div>
                            <textarea
                                id="message"
                                cols={30}
                                rows={5}
                                placeholder='Message'
                                className='placeholder:font-bold bg-transparent border border-white rounded-sm w-full py-2 px-4 text-white mt-4'
                                {
                                    ...register('message', {
                                        required: "Message is required",
                                    })
                                }
                            >
                            </textarea>
                            <span className='text-xs font-semibold text-red-500'>{errors.message?.message}</span>
                        </div>
                        <div
                            className='flex justify-center mt-6'
                        >
                            <button
                                type='submit'
                                className='cta-btn text-white py-2 px-6 md:py-3 md:px-7 text-sm font-semibold'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    <div className='md:hidden mt-8'>
                        <p className='text-xs text-primaryPink text-center'>Share on</p>
                        <div className='flex gap-5 items-center justify-center mt-1'>
                            {
                                footerSocials.map(({name, href, icon}, _) => (
                                    <Link href={href} key={name}>
                                        <Image src={icon} alt={name} />
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className='hidden md:block md:col-span-6 self-start text-white text-base order-1'>
                    <h3 style={clashDisplaySemibold.style} className='text-3xl text-primaryPink'>Get in touch</h3>
                    <p className='mt-4'>Contact <span className='block'>Information</span></p>
                    <p className='mt-4'>
                        27,Alara Street
                        <span className='block'>Yaba 100012</span>
                        <span className='block'>Lagos State</span>
                    </p>
                    <p className='mt-4'>
                        Call Us: <Link href={"tel:07067981819"} target='_blank'>07067981819</Link>
                    </p>
                    <p className='mt-4'>
                        We are open from Monday - Friday <span className='block'>08:00am - 05:00pm</span>
                    </p>

                    <div className='hidden md:block mt-8'>
                        <p className='text-xs text-primaryPink text-left'>Share on</p>
                        <div className='flex gap-5 items-center justify-start mt-1'>
                            {
                                footerSocials.map(({name, href, icon}, _) => (
                                    <Link href={href} key={name}>
                                        <Image src={icon} alt={name} />
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm