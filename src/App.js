
import { Route, Routes } from "react-router";
import * as ROUTES from "./constants/routes";
import Browse from "./views/Browse";
import Home from "./views/Home";
import Signin from "./views/Signin";
import Signup from "./views/Signup";

function App() {
  return (
    
 <Routes>
   <Route path={ROUTES.HOME} element={<Home/>}/>
   <Route path={ROUTES.BROWSE} element={<Browse/>}/>
   <Route path={ROUTES.SIGN_IN} element={<Signin/>}/>
   <Route path={ROUTES.SIGN_UP} element={<Signup/>}/>
 </Routes>

  
  );
}

export default App;
