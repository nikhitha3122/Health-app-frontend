import React from 'react'
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import Diabetes from './components/Diabetes'
import Liver from './components/Liver'
import Home from './components/Home'
import Heart from './components/Heart'
import Cancer from './components/Cancer'
import Kidney from './components/Kidney'
function App() {
  
  return(
    <div>
        <Navbar/>
        <div className="container">
        <Routes>
        
          <Route path="/" element={<Home/>}/>
          <Route path="/diabetes" element={<Diabetes/>} />
          <Route path="/liver" element={<Liver/>} />
          <Route path="/kidney" element={<Kidney/>} />
          <Route path="/heart" element={<Heart/>} />
          <Route path="/cancer" element={<Cancer/>} />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
