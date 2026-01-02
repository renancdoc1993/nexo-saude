import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Banknote, HeartHandshake } from 'lucide-react';

const Benefits = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      title: "Segurança Total",
      desc: "Trabalhamos apenas com operadoras regulamentadas pela ANS, garantindo a tranquilidade que sua família merece."
    },
    {
      icon: <Banknote className="h-8 w-8 text-white" />,
      title: "Melhor Custo-Benefício",
      desc: "Analisamos seu perfil para encontrar planos que cabem no seu bolso, sem taxas escondidas ou surpresas.",
      destaque: true // Vamos dar um destaque visual para esse card
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-white" />,
      title: "Suporte Pós-Venda",
      desc: "Não sumimos após a assinatura. Nossa equipe te ajuda com reembolsos, carteirinhas e autorizações."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base text-nexo-main font-semibold tracking-wide uppercase"
          >
            Por que a Nexo Saúde?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-nexo-dark sm:text-4xl"
          >
            Cuidamos de tudo para você
          </motion.p>
        </div>

        {/* Cards dos Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }} // Um card aparece depois do outro
              whileHover={{ y: -10 }} // Efeito de levantar ao passar o mouse
              className={`relative p-8 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${feature.destaque ? 'ring-2 ring-nexo-main ring-offset-2' : ''}`}
            >
              {/* Ícone com fundo colorido */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-nexo-main to-teal-400 rounded-xl shadow-lg">
                  {feature.icon}
                </div>
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;