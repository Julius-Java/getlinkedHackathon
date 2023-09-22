import React from 'react'
import { clashDisplayBold } from '@/utils/fonts'
import TimelineDetails from './TimelineDetails'
import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'

const Timeline = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null)
    const {scrollYProgress} = useScroll({
        target: scrollRef,
        offset: ["start end", "center start"]
    })
    return (
        <>
            <div className='lg:col-span-12'>
                <h3
                    style={clashDisplayBold.style}
                    className='text-xl text-white text-center md:text-3xl'
                >
                    Timeline
                </h3>
                <p className='text-white text-sm text-center mt-4'>Here is the breakdown of the time we
                anticipate using for the upcoming event.</p>
            </div>

            <div className='relative mt-4 lg:mt-10 lg:col-span-12'>
                <motion.div
                    ref={scrollRef}
                    style={{scaleY: scrollYProgress}}
                    className=' absolute top-0 left-2 w-[4px] lg:left-[51.5%] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 h-full origin-top bg-primaryPink rounded-md'
                />
                <ul className='xs:ml-8 xsX:ml-10 md:ml-12 lg:ml-0'>
                    <TimelineDetails
                        number={1}
                        title='Hackathon Announcements'
                        info='The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register'
                        date='Nomeber 18, 2023'
                    />

                    <TimelineDetails
                        number={2}
                        title='Teams Registration begins'
                        info='Interested teams can now show their interest 
                        in the getlinked tech hackathon 1.0 2023 by 
                        proceeding to register'
                        date='November 18, 2023'
                        order
                    />

                    <TimelineDetails
                        number={3}
                        title='Teams Registration ends'
                        info='Interested Participants are no longer Allowed
                        to register'
                        date='November 18, 2023'
                    />

                    <TimelineDetails
                        number={4}
                        title='Announcement of the accepted teams
                        and ideas'
                        info='All teams whom idea has been accepted into 
                        getlinked tech hackathon 1.0 2023 are formally 
                        announced'
                        date='November 18, 2023'
                        order
                    />

                    <TimelineDetails
                        number={5}
                        title='Getlinked Hackathon 1.0 Offically Begins'
                        info='Accepted teams can now proceed to build 
                        their ground breaking skill driven solutions'
                        date='November 18, 2023'
                    />

                    <TimelineDetails
                        number={6}
                        title='Demo Day'
                        info='Teams get the opportunity to pitch their 
                        projects to judges. The winner of the 
                        hackathon will also be announced on this day'
                        date='November 18, 2023'
                        order
                    />
                </ul>
            </div>
        </>
    )
}

export default Timeline