import React from "react"
import FaqsContainer from "../containers/faqs"
import FooterContainer from "../containers/Footer"
import JumbotronConatainer from "../containers/jumbotron"


const Home =() => {
    return(
       <>
        <JumbotronConatainer/>
        <FaqsContainer/>
        <FooterContainer/>
       </>
    )
}

export default Home;