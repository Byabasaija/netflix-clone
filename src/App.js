
import { Route, Routes } from "react-router";
import * as ROUTES from "./constants/routes";
import Home from "./views/Home";

function App() {
  return (
    
 <Routes>
   <Route path={ROUTES.HOME} element={<Home/>}/>
 </Routes>

  
  );
}

export default App;
