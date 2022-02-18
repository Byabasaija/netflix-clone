import React from "react";
import  Jumbotron  from "../components/Jumbotron";
import jumbotronData from "../fixtures/jumbotron.json"

export const JumbotronConatainer =()=>{
    return(
        <Jumbotron.Container>
     {jumbotronData.map((item)=>(
       <Jumbotron key={item.id} direction={item.direction}>
        <Jumbotron.Pane>
          <Jumbotron.Title>
              {item.title}
          </Jumbotron.Title>
          <Jumbotron.SubTitle>
            {item.subTitle}
          </Jumbotron.SubTitle>
        </Jumbotron.Pane>
        <Jumbotron.Pane>
        <Jumbotron.Image src={item.image} alt={item.alt}/>
        </Jumbotron.Pane>
       </Jumbotron>
     ))}
    </Jumbotron.Container>
    )
}