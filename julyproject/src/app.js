import React from 'react'
import Navbar from './component/navbar/navbar'
import './app.css' 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/login/login';

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
  
}

export default App
