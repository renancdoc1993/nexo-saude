import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion'; 

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              
              {}
              <motion.span 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block py-1 px-3 rounded-full bg-nexo-light text-nexo-dark text-sm font-bold mb-4 border border-nexo-main/20"
              >
                Mais de 10 anos de experiência
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl tracking-tight font-extrabold text-nexo-dark sm:text-5xl md:text-6xl"
              >
                <span className="block xl:inline">Sua saúde merece</span>{' '}
                <span className="block text-nexo-main xl:inline">o cuidado da Nexo.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Encontre o plano ideal para sua família ou empresa com a segurança de quem entende do assunto. Cotação rápida, transparente e sem burocracia.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3"
              >
                <div className="rounded-md shadow">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-nexo-main hover:bg-nexo-dark md:py-4 md:text-lg transition-colors duration-300"
                  >
                    Simular Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-nexo-dark bg-nexo-light hover:bg-teal-100 md:py-4 md:text-lg transition-colors duration-300"
                  >
                    Para Empresas
                  </motion.a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-8 border-t border-gray-100 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-nexo-main mr-2" />
                  <span className="text-sm text-gray-600">Cotação 100% Gratuita</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-nexo-main mr-2" />
                  <span className="text-sm text-gray-600">Especialistas em PME</span>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      >
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Médicos sorrindo"
        />
      </motion.div>
    </div>
  );
};

export default Hero;