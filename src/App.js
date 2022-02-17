import { useState } from "react";
import { Route, Routes } from "react-router";
import  Jumbotron  from "./components/Jumbotron";
import jumbotronData from "./fixtures/jumbotron.json"

function App() {
  

  return (
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
  
  );
}

export default App;
