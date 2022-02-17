import { useState } from "react";
import { Route, Routes } from "react-router";
import  Jumbotron  from "./components/Jumbotron";
import jumbotronData from "./fixtures/jumbotron.json"

function App() {
  

  return (
    <Jumbotron.Container>
     {jumbotronData.map((item)=>(
       <Jumbotron key={item.id} direction={item.direction}>
        
       </Jumbotron>
     ))}
    </Jumbotron.Container>
  
  );
}

export default App;
