import React from "react";
import { Container, Input, Button, Text, Break } from "./styles/cta";

export default function CtaForm({children, ...restProps}){
    return(
        <Container {...restProps}>{children}</Container>
    )
}

CtaForm.Input =function CtaFormInput({children, ...restProps}){
    return <Input {...restProps}/>
}

CtaForm.Button =function CtaFormButton({children, ...restProps}){
    return <Button {...restProps}>
          {children} <img src="/assets/images/icons/chevron-right.png" alt="try now" />
         </Button>
}


CtaForm.Text =function CtaFormText({children, ...restProps}){
    return <Text {...restProps}>
          {children} 
         </Text>
}

CtaForm.Break =function CtaFormBreak({children, ...restProps}){
    return <Break {...restProps}/>
        
}