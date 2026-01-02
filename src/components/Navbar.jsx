import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 top-0 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO (Clicável para voltar à Home) */}
          <Link to="/" className="flex items-center flex-shrink-0 cursor-pointer">
            <img 
              className="h-12 w-auto" 
              src={logoImg} 
              alt="Nexo Saúde" 
            />
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-600 hover:text-nexo-main transition font-medium">
              Início
            </Link>
            <Link to="/planos" className="text-gray-600 hover:text-nexo-main transition font-medium">
              Planos
            </Link>
            <Link to="/sobre" className="text-gray-600 hover:text-nexo-main transition font-medium">
              Sobre Nós
            </Link>
            
            {/* Botão de Destaque (Leva para Cotação) */}
            <Link 
              to="/cotacao" 
              className="bg-nexo-main text-white px-6 py-2.5 rounded-full font-bold hover:bg-nexo-dark transition flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Fale com Consultor
            </Link>
          </div>

          {/* BOTÃO HAMBURGUER (Mobile) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-nexo-main">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE (Expandido) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen sm:h-auto">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)} 
              className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-nexo-main hover:bg-nexo-light border-b border-gray-50"
            >
              Início
            </Link>
            <Link 
              to="/planos" 
              onClick={() => setIsOpen(false)} 
              className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-nexo-main hover:bg-nexo-light border-b border-gray-50"
            >
              Planos
            </Link>
            <Link 
              to="/sobre" 
              onClick={() => setIsOpen(false)} 
              className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-nexo-main hover:bg-nexo-light border-b border-gray-50"
            >
              Sobre Nós
            </Link>
            
            <div className="pt-4">
              <Link 
                to="/cotacao" 
                onClick={() => setIsOpen(false)} 
                className="w-full bg-nexo-main text-white px-6 py-4 rounded-lg font-bold hover:bg-nexo-dark flex justify-center items-center gap-2 transition shadow-md"
              >
                <Phone size={18} />
                Solicitar Cotação
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;