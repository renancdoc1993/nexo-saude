import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

// Dados das perguntas e respostas
const faqData = [
  {
    question: "O que é carência e quanto tempo preciso esperar?",
    answer: "Carência é o tempo que você precisa aguardar para usar determinados procedimentos após contratar o plano. Em casos de urgência e emergência, o prazo é de apenas 24 horas. Para consultas e exames simples, geralmente 30 dias."
  },
  {
    question: "Qual a diferença entre plano com e sem coparticipação?",
    answer: "No plano SEM coparticipação, você paga um valor fixo mensal e usa o quanto precisar sem taxas extras. No plano COM coparticipação, a mensalidade é mais barata, mas você paga uma pequena taxa cada vez que realiza uma consulta ou exame."
  },
  {
    question: "Posso contratar um plano apenas para mim (Pessoa Física)?",
    answer: "Sim! Trabalhamos com planos individuais (adesão) e também familiares. Se você tiver CNPJ (mesmo que seja MEI), consegue descontos de até 30% em relação ao plano de pessoa física."
  },
  {
    question: "Os planos cobrem cirurgias e internações?",
    answer: "Com certeza. Todos os planos regulamentados pela ANS (segmentação Hospitalar ou Referência) cobrem internações, cirurgias e tratamentos graves, garantindo sua segurança em momentos delicados."
  }
];

const FAQ = () => {
  // Estado para saber qual pergunta está aberta (null = nenhuma)
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-nexo-light rounded-full mb-4"
          >
            <HelpCircle className="w-6 h-6 text-nexo-main" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-nexo-dark sm:text-4xl"
          >
            Dúvidas Frequentes
          </motion.h2>
          <p className="mt-4 text-gray-500">
            Separamos as principais perguntas de nossos clientes para te ajudar.
          </p>
        </div>

        {/* Lista de Perguntas */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Botão da Pergunta */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className={`font-semibold text-lg transition-colors duration-300 ${activeIndex === index ? 'text-nexo-main' : 'text-gray-700'}`}>
                  {item.question}
                </span>
                
                {/* Ícone da Seta que gira */}
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={`w-5 h-5 ${activeIndex === index ? 'text-nexo-main' : 'text-gray-400'}`} />
                </motion.div>
              </button>

              {/* Área da Resposta (Animação de abrir/fechar) */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;