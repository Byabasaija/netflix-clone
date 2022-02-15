import { Route, Routes } from "react-router";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Browse from "./components/views/Browse";
import Home from "./components/views/Home";
function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="browse" element={<Browse/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
     </Routes>
    </>
  );
}

export default App;
