import React from 'react'

const Container = ({children}: any) => {
    return (
        <section
            className='border-b border-b-slate-700'
            id='Timeline'
        >
            <div
                className='max-w-7xl w-[90%] mx-auto relative min-h-[60vh] pt-4 my-8 mb-14 lg:grid lg:grid-cols-12 lg:items-center'
            >
                {children}
            </div>
        </section>
    )
}

export default Container