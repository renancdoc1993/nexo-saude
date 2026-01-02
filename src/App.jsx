import React from 'react';
// Lembre-se que mudamos para HashRouter no passo anterior (se for para o GitHub Pages)
// Se estiver usando BrowserRouter, funciona igual.
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Plans from './Pages/Plans';
import About from './Pages/About';
import Quote from './Pages/Quote';
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <Router>
      {/* 2. ADICIONE ELE AQUI (Logo após abrir o Router) */}
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planos" element={<Plans />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/cotacao" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;