import React from "react"
import faqData from "../fixtures/FAQ.json"
import  { FaqAccordion }  from "../components"

const FaqsContainer = () => {
    return (
       <FaqAccordion>
           <FaqAccordion.Title>Frequently Asked Questions</FaqAccordion.Title>
           {faqData.map(item => 
            <FaqAccordion.Item key={item.id}>
                <FaqAccordion.Header>{item.header}</FaqAccordion.Header>
                <FaqAccordion.Body>{item.body}</FaqAccordion.Body>

            </FaqAccordion.Item>
            )}
       </FaqAccordion>

    )
}

export default FaqsContainer;