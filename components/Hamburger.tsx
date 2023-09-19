import React from 'react'

type HamburgerProps = {
    menuOpen: boolean,
    setMenuOpen: (menuOpen: boolean) => void
}

const Hamburger = ({menuOpen, setMenuOpen}: HamburgerProps) => {
    return (
        <button
            className={` ${menuOpen && "p-[2px] bg-gradient-to-r from-primaryPink to-primaryPurpleLight rounded-full"} z-30`}
            onClick={() => setMenuOpen(!menuOpen)}
        >
            <div
                className='bg-primaryPurpleDark rounded-full flex-col items-center justify-center gap-1 flex'
            >
                <span className={`bg-white  rounded-sm transition-all duration-300 ease-out h-1 block self-start ${menuOpen ? "rotate-45 translate-y-2 w-3 self-center" : "translate-y-0 w-3"}`}></span>
                <span className={`bg-white  rounded-sm transition-all duration-300 ease-out h-1 block w-6 ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`bg-white  rounded-sm transition-all duration-300 ease-out h-1 block self-end ${menuOpen ? "-rotate-45 -translate-y-2 w-3 self-center" : "translate-y-0 w-3"}`}></span>
            </div>
        </button>
    )
}

export default Hamburger
