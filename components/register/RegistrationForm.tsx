/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { clashDisplaySemibold } from '@/utils/fonts'
import Image from 'next/image'
import thumbsupSVG from "../../public/assets/3d-graphic-designer-showing-thumbs-up-png 1.svg"
import registerSVG from "../../public/assets/registration.svg"
import { set, useForm } from 'react-hook-form'
import { useState } from 'react'
import Congratulations from './Congratulations'
import SpinSVG from '../shared/SpinSVG'
import axios from 'axios'
import { useRouter } from 'next/router'
import Alert from '../shared/Alert'

type RegistrationFormValues = {
    team_name: string
    phone_number: string
    email: string
    project_topic: string
    category: string
    group_size: string
    privacy_policy_accepted: boolean
}


const RegistrationForm = () => {

    // set is submitted state for when form is submitted
    const [isSubmitted, setIsSubmitted] = useState(false)

    // set is loading state for when form is submitted
    const [isLoading, setIsLoading] = useState(false)

    // const [errorSubmission, setErrorSubmission] = useState(false)

    const [returnedData, setReturnedData] = useState("")


    const {register, control, handleSubmit, formState: {errors}, reset, setValue, } = useForm<RegistrationFormValues>({mode: "onSubmit"})


    const formSubmit = (data: RegistrationFormValues) => {
        // Set loading state for button
        setIsLoading(true)

        // Destructure data
        const {team_name, phone_number, email, project_topic, category, group_size} = data

        // Make axios request to https://backend.getlinked.ai/hackathon/registration and return true if data is submitted successfully
        axios.post("https://backend.getlinked.ai/hackathon/registration", {
            team_name,
            phone_number,
            email,
            project_topic,
            category,
            group_size
        })
        .then(res => {
            // Scroll to top of page
            window.scrollTo(0, 0)
            reset()
            setIsSubmitted(true)
            setIsLoading(false)
        })
        .catch(err => {
            window.scrollTo(0, 0)
            console.log(err.response.status)
            setIsLoading(false)
            if (err.response) {
                if (err.response.status === 400) {
                    const feildErrors = err.response.data
                    if (feildErrors && feildErrors.email[0]) {
                        setReturnedData(feildErrors.email[0])
                        setTimeout(() => {
                            setReturnedData("")
                        }, 5000)
                    }
                } else {
                    setReturnedData("resource not Found")
                    setTimeout(() => {
                        setReturnedData("")
                    }, 5000)
                }
            } else if (err.request) {
                setReturnedData("Network Error")
                setTimeout(() => {
                    setReturnedData("")
                }, 5000)
            }
        })
    }

    return (
        <div>
            {
                isSubmitted && <Congratulations />
            }
            {
                returnedData && <Alert alertInfo={returnedData} />
            }
            <div
                className='max-w-7xl w-[90%] mx-auto relative min-h-screen h-full pt-2 my-4 mb-14'
            >
                <h2
                    style={clashDisplaySemibold.style}
                    className='text-xl md:text-3xl text-primaryPink md:hidden'
                >
                    Register
                </h2>
                <div className='mt-6 md:grid md:grid-cols-12 md:items-center'>
                    <div className='md:col-span-6'>
                        <Image
                            src={thumbsupSVG}
                            alt="Rgitration form"
                            priority
                            className='w-full'
                        />
                    </div>
                    <div className='text-white mt-6 md:col-span-6'>
                        <h2
                            style={clashDisplaySemibold.style}
                            className='text-xl md:text-3xl text-primaryPink md:mb-4'
                        >
                            Register
                        </h2>
                        <div className='grid grid-cols-12 items-center'>
                            <p className='text-xs md:text-sm col-span-8 sm:col-span-3 md:col-span-4 self-end'>Be part of this movement</p>
                            <Image
                                src={registerSVG}
                                alt="Rgitration form"
                                priority
                                className='w-full col-span-4 sm:w-4/5'
                            />
                        </div>
                        <h4 className='capitalize text-center text-xl mt-6'>create your account</h4>
                        <form
                            onSubmit={handleSubmit((data: RegistrationFormValues) => formSubmit(data))}
                        >
                            <div className='my-3'>
                                <label htmlFor="teamName" className='mb-2 block text-[13px] md:text-sm'>
                                    Team's Name
                                </label>
                                <input
                                    type="text"
                                    id='teamName'
                                    className='placeholder:font-semibold bg-transparent border border-white rounded-sm w-full py-2 font-bold px-4 text-white placeholder:text-xs text-xs'
                                    placeholder='Enter the name of your group'
                                    {
                                        ...register('team_name', {
                                            required: "Team Name is required",
                                        })
                                    }
                                />
                                <span className='text-xs text-red-500 block mt-2 font-semibold'>{errors.team_name?.message}</span>
                            </div>
                            <div className='my-3'>
                                <label htmlFor="phone_number" className='mb-2 block text-[13px] md:text-sm'>
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    id='phone_number'
                                    className='placeholder:font-semibold bg-transparent border border-white rounded-sm w-full py-2 font-bold px-4 text-white placeholder:text-xs text-xs'
                                    placeholder='Enter your phone number'
                                    {
                                        ...register('phone_number', {
                                            required: "Phone Number is required",
                                            pattern: {
                                                value: /^\d{11}$/,
                                                message: "Phone Number must be 11 digits"
                                            }
                                        })
                                    }
                                />
                                <span className='text-xs text-red-500 block mt-1 font-semibold'>{errors.phone_number?.message}</span>
                            </div>
                            <div className='my-3'>
                                <label htmlFor="email" className='mb-2 block text-[13px] md:text-sm'>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id='email'
                                    className='placeholder:font-semibold bg-transparent border border-white rounded-sm w-full py-2 font-bold px-4 text-white placeholder:text-xs text-xs'
                                    placeholder='Enter your email address'
                                    {
                                        ...register('email', {
                                            required: "Email Address is required",
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: "Valid Email is required"
                                            }
                                        })
                                    }
                                />
                                <span className='text-xs text-red-500 block mt-1 font-semibold'>{errors.email?.message}</span>
                            </div>
                            <div className='my-3'>
                                <label htmlFor="project_topic" className='mb-2 block text-[13px] md:text-sm'>
                                    Project Topic
                                </label>
                                <input
                                    type="text"
                                    id='project_topic'
                                    className='placeholder:font-semibold bg-transparent border border-white rounded-sm w-full py-2 font-bold px-4 text-white placeholder:text-xs text-xs'
                                    placeholder='What is your project topic?'
                                    {
                                        ...register('project_topic', {
                                            required: "Project Topic is required",
                                        })
                                    }
                                />
                                <span className='text-xs text-red-500 block mt-1 font-semibold'>{errors.project_topic?.message}</span>
                            </div>
                            <div className='my-3 xs:grid xs:grid-cols-12 xs:items-center xs:gap-4'>
                                <div className='mb-4 xs:mb-0 xs:col-span-8'>
                                    <label htmlFor="hs-select-label" className="block text-sm font-medium mb-2 text-white">Category</label>
                                    <select
                                        id="hs-select-label"
                                        className="py-2 px-4 pr-9 block w-full bg-primaryPurpleDark  border border-white rounded-md text-sm text-white font-bold"
                                        {
                                            ...register('category', {
                                                required: "Category is required",
                                            })
                                        }
                                    >
                                        <option value={""} className='text-xs'>Select your category</option>
                                        <option value={"1"}>1</option>
                                        <option value={"2"}>2</option>
                                        <option value={"3"}>3</option>
                                    </select>
                                    <span className='text-xs text-red-500 block mt-1 font-semibold'>{errors.category?.message}</span>
                                </div>
                                <div className='xs:col-span-4'>
                                    <label htmlFor="hs-select-label" className="block text-sm font-medium mb-2 text-white">Group size</label>
                                    <select
                                        id="hs-select-label"
                                        className="py-2 px-4 pr-9 block w-full bg-primaryPurpleDark  border border-white rounded-md text-sm text-white font-bold "
                                        {
                                            ...register('group_size', {
                                                required: "Group Size is required",
                                            })
                                        }
                                    >
                                        <option value={""}  className='text-xs bg-white text-black'>
                                            Select
                                        </option>
                                        <option value={"1"}>1</option>
                                        <option value={"2"}>2</option>
                                        <option value={"3"}>3</option>
                                    </select>
                                    <span className='text-xs text-red-500 block mt-1 font-semibold'>{errors.group_size?.message}</span>
                                </div>
                            </div>
                            <div>
                                <span className='block text-primaryPink text-[9px] text-center md:text-left mb-4'>Please review your registration details before submitting</span>
                                <div className='flex items-center gap-2'>
                                    <input
                                        id='privacy_policy_accepted'
                                        type="checkbox"
                                        className="cursor-pointer appearance-none border-2 bg-transparent flex items-center justify-center border-white h-4 w-4 rounded checked:bg-primaryPink checked:border-white focus:outline-none checked:before:content-['✔'] checked:before:text-white checked:before:font-bold checked:before:text-sm checked:before:block checked:before:leading-[14px]"
                                        {
                                            ...register('privacy_policy_accepted', {
                                                required: "Please agree to the terms and conditions",
                                            })
                                        }
                                    />
                                    <label htmlFor="privacy_policy_accepted" className='text-[10px] block'>I agreed with the event terms and conditions
                                    and privacy policy</label>
                                </div>
                                <span className='text-xs text-red-500 block mt-2 font-semibold text-[9px]'>{errors.privacy_policy_accepted?.message}</span>
                            </div>
                            <div
                                className='flex justify-center mt-6 md:justify-start'
                            >
                                <button
                                    type='submit'
                                    className={`cta-btn text-white py-2 px-6 md:py-3 md:px-7 text-sm font-semibold md:w-full ${isLoading ? "opacity-50 cursor-not-allowed" : ""} flex items-center justify-center`}
                                    disabled={isLoading}
                                >
                                    {
                                        isLoading
                                        ?
                                        (
                                            <SpinSVG />
                                        )
                                        :
                                        ("Register")
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm