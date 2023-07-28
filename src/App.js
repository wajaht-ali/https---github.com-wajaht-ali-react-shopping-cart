import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
// import Contact from "./components/Contact";
// import About from "./components/About";
import "./styles/app.scss";
import {Toaster} from 'react-hot-toast';

function App() {
  return (
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );
}

export default App;
