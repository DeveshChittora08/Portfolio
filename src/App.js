import { BrowserRouter, Route, Routes } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";



function App() {
  return (
    <div>

<div>
  {/* <BrowserRouter> */}
  
<Navbar clssname="mb-8"/>

{/* <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/skills" element={<Skills/>}></Route>
  <Route path="/project" element={<Projects/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
</Routes> */}

<Home />
<About/>
<Skills/>
<Projects/>
<Contact/>
<Footer/>
{/* </BrowserRouter> */}
 </div>

    </div>
  
  );
}

export default App;
