import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Plans from './Pages/Plans';
import About from './Pages/About';
import Quote from './Pages/Quote';


function App() {
  return (
    <Router>
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