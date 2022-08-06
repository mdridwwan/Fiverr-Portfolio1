import React from 'react';
import "./index.css";
import {Routes, Route} from 'react-router-dom';
import Home from "./component/Home/Home";
import Contact from "./component/Home/Contact";
import About from "./component/Home/About";
import Project from "./component/Home/Project";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
