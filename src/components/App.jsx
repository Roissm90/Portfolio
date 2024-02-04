import { Route, Routes } from "react-router-dom";
import './_app.scss';
import Nav from './core/Nav';
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import { useState } from "react";

const App = () => {
  const [nightMode, setNightMode] = useState(false); 
  const toggleNightMode = () => {
    setNightMode(!nightMode); 
  };
  return (
    <div className='container-app'>
      <Nav nightMode={nightMode} toggleNightMode={toggleNightMode}/>
      <Routes>
        <Route path="/" element={<AboutMe nightMode={nightMode}/>}></Route>
        <Route path="/skills" element={<Skills nightMode={nightMode}/>}></Route>
        <Route path="/proyectos" element={<Projects nightMode={nightMode}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
