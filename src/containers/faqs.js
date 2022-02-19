import React from "react"
import faqData from "../fixtures/FAQ.json"
import  { CtaForm, FaqAccordion }  from "../components"

const FaqsContainer = () => {
    return (
       <FaqAccordion>
        
        <FaqAccordion.Title>Frequently Asked Questions</FaqAccordion.Title>
        <FaqAccordion.Frame>
           {faqData.map(item => 
            <FaqAccordion.Item key={item.id}>
                <FaqAccordion.Header>{item.header}</FaqAccordion.Header>
                <FaqAccordion.Body>{item.body}</FaqAccordion.Body>
            </FaqAccordion.Item>
            )}
        </FaqAccordion.Frame>

        <CtaForm>
            <CtaForm.Input placeholder="Email address"/>
            <CtaForm.Button>Try it now!</CtaForm.Button>
            <CtaForm.Text>Ready to watch? Enter your email to create or restart your membership</CtaForm.Text>
        </CtaForm>
       </FaqAccordion>

    )
}

export default FaqsContainer;