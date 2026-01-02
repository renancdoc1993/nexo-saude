import React from 'react';
import { motion } from 'framer-motion';
import { User, Building2, ArrowRight, Check } from 'lucide-react';

const TargetAudience = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-50 skew-y-3 transform origin-top-left z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-nexo-dark sm:text-4xl"
          >
            Temos o plano perfeito para o seu perfil
          </motion.h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Seja para proteger quem você ama ou valorizar seus colaboradores, nós encontramos a melhor opção.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* CARD 1: PARA VOCÊ E FAMÍLIA */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            {/* Imagem de Fundo com Overlay */}
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-nexo-dark/90 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Família feliz" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                <div className="p-3 bg-nexo-main rounded-lg text-white">
                  <User size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Para Você e Família</h3>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-gray-600">
                  <Check className="h-5 w-5 text-nexo-main mr-3 mt-0.5" />
                  <span>Planos individuais e familiares (Adesão)</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <Check className="h-5 w-5 text-nexo-main mr-3 mt-0.5" />
                  <span>Ampla rede credenciada de hospitais</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <Check className="h-5 w-5 text-nexo-main mr-3 mt-0.5" />
                  <span>Carências reduzidas em promoções</span>
                </li>
              </ul>
              
              <button className="w-full py-4 rounded-xl border-2 border-nexo-main text-nexo-main font-bold hover:bg-nexo-main hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                Simular Individual
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* CARD 2: PARA EMPRESAS (CNPJ) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 border-nexo-main/10"
          >
            {/* Badge de Desconto */}
            <div className="absolute top-4 right-4 z-30 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
              Até 40% mais barato
            </div>

            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-nexo-dark/90 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Ambiente corporativo" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                <div className="p-3 bg-white rounded-lg text-nexo-dark">
                  <Building2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Para Sua Empresa</h3>
              </div>
            </div>

            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-gray-600">
                  <Check className="h-5 w-5 text-nexo-main mr-3 mt-0.5" />
                  <span>A partir de 2 vidas (pode ser MEI)</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <Check className="h-5 w-5 text-nexo-main mr-3 mt-0.5" />
                  <span>Desconto exclusivo para CNPJ</span>
                </li>
                <li className="flex items-start text-gray-600">
                  <Check className="h-5 w-5 text-nexo-main mr-3 mt-0.5" />
                  <span>Gestão completa de benefícios</span>
                </li>
              </ul>

              <button className="w-full py-4 rounded-xl bg-nexo-main text-white font-bold hover:bg-nexo-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Simular Empresarial
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TargetAudience;