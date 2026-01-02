import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
// 1. Importando a logo
import logoImg from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-nexo-dark text-white pt-16 pb-8 border-t border-nexo-main/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Logo e Sobre */}
          <div>
            {/* 2. LOGO AQUI: O filtro 'brightness-0 invert' deixa ela branca */}
            <img 
              src={logoImg} 
              alt="Nexo Saúde" 
              className="h-12 w-auto mb-6 brightness-0 invert opacity-90" 
            />
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Simplificamos o acesso à saúde de qualidade. Consultoria especializada para você encontrar o plano ideal sem burocracia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-nexo-main transition hover:bg-gray-800 p-2 rounded-full"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-nexo-main transition hover:bg-gray-800 p-2 rounded-full"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-nexo-main transition hover:bg-gray-800 p-2 rounded-full"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-nexo-main/20 pb-2 inline-block">Navegação</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-nexo-main transition flex items-center gap-2">Início</a></li>
              <li><a href="#" className="hover:text-nexo-main transition flex items-center gap-2">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-nexo-main transition flex items-center gap-2">Planos Individuais</a></li>
              <li><a href="#" className="hover:text-nexo-main transition flex items-center gap-2">Planos Empresariais</a></li>
              <li><a href="#" className="hover:text-nexo-main transition flex items-center gap-2">Blog</a></li>
            </ul>
          </div>

          {/* Coluna 3: Principais Operadoras */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-nexo-main/20 pb-2 inline-block">Planos</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-nexo-main transition">Amil Saúde</a></li>
              <li><a href="#" className="hover:text-nexo-main transition">Bradesco Saúde</a></li>
              <li><a href="#" className="hover:text-nexo-main transition">SulAmérica</a></li>
              <li><a href="#" className="hover:text-nexo-main transition">Unimed</a></li>
              <li><a href="#" className="hover:text-nexo-main transition">Porto Seguro</a></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-nexo-main/20 pb-2 inline-block">Fale Conosco</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3 group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-nexo-main transition">
                    <Phone size={18} className="text-nexo-main group-hover:text-white transition" />
                </div>
                <span className="mt-1">(11) 99999-9999<br/>(11) 3333-3333</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-nexo-main transition">
                    <Mail size={18} className="text-nexo-main group-hover:text-white transition" />
                </div>
                <span className="mt-1">contato@nexosaude.com.br</span>
              </li>
              <li className="flex items-start gap-3 group">
                 <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-nexo-main transition">
                    <MapPin size={18} className="text-nexo-main group-hover:text-white transition" />
                </div>
                <span className="mt-1">Av. Paulista, 1000<br/>São Paulo - SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Divisória e Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Nexo Saúde. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Desenvolvido com <span className="text-red-500">❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;