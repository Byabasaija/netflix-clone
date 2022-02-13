import { Route, Routes } from "react-router";
import Browse from "./components/views/Browse";
import Home from "./components/views/Home";
function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/browse" element={<Browse/>}/>
     </Routes>
    </>
  );
}

export default App;
