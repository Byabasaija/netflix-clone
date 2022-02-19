import React, { useState, useContext, createContext } from "react";
import { Container, Frame, Inner, Item, Body, Title, Header } from "./styles/faq";
const ToggleContext = createContext();
const FaqAccordion =({children, ...restProps}) => {
    return (
        <Container {...restProps}>
           <Inner>{children}</Inner>
        </Container>
    )
    
}
export default FaqAccordion;

FaqAccordion.Title = function FaqAccordionTitle({children, ...restProps}){
    return (
        <Title {...restProps}>{children}</Title>
    )
}

FaqAccordion.Frame = function FaqAccordionFrame({children, ...restProps}){
    return (
        <Frame {...restProps}>{children}</Frame>
    )
}

FaqAccordion.Item = function FaqAccordionItem({children, ...restProps}){
    const [showToggle, setShowToggle] = useState(false);
    return (
       <ToggleContext.Provider  value={{showToggle, setShowToggle}}>
            <Item {...restProps}>{children}</Item>
       </ToggleContext.Provider>
    )
}

FaqAccordion.Header = function FaqAccordionHeader({children, ...restProps}){
    const {showToggle, setShowToggle } = useContext(ToggleContext)
    return (
        <Header onClick={()=>setShowToggle((showToggle)=>!showToggle)} {...restProps}>{children}</Header>
    )
}

FaqAccordion.Body = function FaqAccordionBody({children, ...restProps}){
    const { showToggle } =useContext(ToggleContext)
    
    return showToggle?   <Body {...restProps}>{children}</Body> : null;
 
}

