import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import TargetAudience from '../components/TargetAudience';
import Benefits from '../components/Benefits';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Padding-top-20 para o conteúdo não ficar escondido atrás da Navbar fixa */}
      <div className="pt-20">
        <Hero />
        <Partners />
        <TargetAudience />
        <Benefits />
        <FAQ />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;