"use client";
import React from 'react'
import { useEffect } from 'react'


const PrelineContext = ({children}: any) => {
    useEffect(() => {
        // @ts-ignore
        import('preline');
    }, []);

    return (
        <div>
            {children}
        </div>
    )
}

export default PrelineContext