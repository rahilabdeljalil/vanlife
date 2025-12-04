import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Footer from "./pages/Footer.jsx";
import Vans from "./pages/Vans.jsx";
import VanCard from "./pages/vancards.jsx";
import Layout from "./components/Layout.jsx"; 
import "./styles.css";
import "./server.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanCard />} />
        
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
