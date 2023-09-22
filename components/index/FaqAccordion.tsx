/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {faqInfo} from '@/utils/faqInfo'
import Accordion from '../shared/Accordion'
import type { faqInfoProps } from '@/utils/faqInfo'

const FaqAccordion = () => {
  return (
    <div
        className='hs-accordion-group mt-4'
    >
        {
            faqInfo.map(({question, answer, number}: faqInfoProps, _: number) => (
                <Accordion
                    key={_}
                    number={number}
                    isOpen={number === "one"}
                    question={question}
                    answer={answer}
                />
            ))
        }
    </div>
  )
}

export default FaqAccordion