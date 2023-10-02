"use client"
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const CountdownTimer = () => {
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
    const controls = useAnimation();

    function getTimeRemaining() {
        const targetDate = new Date('November 18, 2023 00:00:00').getTime();
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
        return { hours: 0, minutes: 0, seconds: 0 };
        }

        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        return { hours, minutes, seconds };
    }

    useEffect(() => {
        const interval = setInterval(() => {
        setTimeRemaining(getTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        controls.start({
        scale: 1.2,
        transition: { duration: 0.5, yoyo: Infinity },
        });
    }, [controls]);

    return (
        <motion.div
            className="countdown-timer"
            // animate={controls}
        >
            {
                `${timeRemaining.hours.toString().padStart(2, '0')}H
                ${timeRemaining.minutes.toString().padStart(2, '0')}M
                ${timeRemaining.seconds.toString().padStart(2, '0')}S`
            }
        </motion.div>
    );
};

export default CountdownTimer;
