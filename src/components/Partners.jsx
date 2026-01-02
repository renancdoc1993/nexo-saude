import React from 'react';
import { motion } from 'framer-motion';

// Importando as imagens
import amilLogo from '../assets/amil.png';
import bradescoLogo from '../assets/bradesco.png';
import sulamericaLogo from '../assets/sulamerica.png';
import unimedLogo from '../assets/unimed.png';
import goldenLogo from '../assets/golden.png';
import portoLogo from '../assets/porto.png';

const Partners = () => {
  const operadoras = [
    { name: "Amil", logo: amilLogo },
    { name: "Bradesco Saúde", logo: bradescoLogo },
    { name: "SulAmérica", logo: sulamericaLogo },
    { name: "Unimed", logo: unimedLogo },
    { name: "Golden Cross", logo: goldenLogo },
    { name: "Porto Seguro", logo: portoLogo },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 font-semibold uppercase tracking-widest mb-12 text-xs"
        >
          Trabalhamos com as melhores operadoras
        </motion.p>
        
        {/* Grid ajustado para centralizar melhor */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-center">
          {operadoras.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Container com altura fixa para garantir alinhamento vertical
              className="h-24 w-full flex items-center justify-center p-2 hover:bg-gray-50 rounded-xl transition-all duration-300"
            >
              <img 
                src={item.logo} 
                alt={`Logo ${item.name}`}
                // O SEGREDO ESTÁ AQUI:
                // max-h-12 (48px): Segura as logos quadradas (Unimed/Amil) para não ficarem gigantes
                // w-auto: Mantém a proporção
                // max-w-[140px]: Segura as logos muito largas (Bradesco) para não estourarem
                // object-contain: Garante que a imagem inteira apareça
                className="max-h-12 w-auto max-w-[140px] object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 filter"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;