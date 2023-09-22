import React from 'react'

type AccordionProp = {
    number: string,
    question: string,
    answer: string,
    isOpen: boolean
}

const Accordion = ({question, answer, number, isOpen}: AccordionProp) => {
    return (
            <div className={`hs-accordion border-b border-primaryPink`} id={"hs-basic-heading-" + number}>
            <button
                className="hs-accordion-toggle hs-accordion-active:text-primaryPurpleLight group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-white transition hover:text-primaryPink text-xs justify-between"
                aria-controls={"hs-basic-collapse-" + number}
            >
            <svg
                className="hs-accordion-active:hidden hs-accordion-active:text-primaryPurpleLight hs-accordion-active:group-hover:text-primaryPink block w-4 h-4 text-primaryPink group-hover:text-primaryPink order-2 self-end"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M2.62421 7.86L13.6242 7.85999"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                />
                <path
                d="M8.12421 13.36V2.35999"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                />
            </svg>
            <svg
                className="hs-accordion-active:block hs-accordion-active:text-primaryPurpleLight hs-accordion-active:group-hover:text-primaryPurpleLight hidden w-4 h-4 text-gray-600 group-hover:text-primaryPurpleLight order-2 self-end"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M2.62421 7.86L13.6242 7.85999"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                />
            </svg>
                {question}
            </button>
            <div
            id={"hs-basic-collapse-" + number}
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby={"hs-basic-heading-" + number}
            >
            <p className="text-white pb-4 text-xs md:text-sm leading-5 lg:leading-6">
                <em>
                    {answer}
                </em>
            </p>
            </div>
        </div>

        )
    }

export default Accordion
    // <div
    //     className={`hs-accordion ${isOpen ? "active" : ""} border-b border-primaryPink`}
    //     id={"hs-basic-heading-" + number}
    // >
    //     <button
    //         className="hs-accordion-toggle hs-accordion-active:text-primaryPurpleLight group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-white transition hover:text-primaryPink text-xs lg:justify-between"
    //         aria-controls={"hs-basic-collapse-" + number}
    //     >
    //         <svg
    //             className="hs-accordion-active:hidden hs-accordion-active:text-primaryPurpleLight hs-accordion-active:group-hover:text-primaryPink block w-4 h-4 text-primaryPink group-hover:text-primaryPink order-2 self-end"
    //             width="16"
    //             height="16"
    //             viewBox="0 0 16 16"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //         >
    //             <path
    //             d="M2.62421 7.86L13.6242 7.85999"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             />
    //             <path
    //             d="M8.12421 13.36V2.35999"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             />
    //         </svg>
    //         <svg
    //             className="hs-accordion-active:block hs-accordion-active:text-primaryPurpleLight hs-accordion-active:group-hover:text-primaryPurpleLight hidden w-4 h-4 text-gray-600 group-hover:text-primaryPurpleLight order-2 self-end"
    //             width="16"
    //             height="16"
    //             viewBox="0 0 16 16"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //         >
    //             <path
    //             d="M2.62421 7.86L13.6242 7.85999"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             />
    //         </svg>
    //         {question}
    //     </button>
    //     <div
    //         id={"hs-basic-collapse-" + number}
    //         className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
    //         aria-labelledby={"hs-basic-heading-" + number}
    //     >
    //         <p className="text-white pb-4 text-xs lg:text-sm leading-5 lg:leading-6">
    //             <em>
    //             {answer}
    //             </em>
    //         </p>
    //     </div>
    // </div>