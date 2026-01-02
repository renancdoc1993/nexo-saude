import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Star, Building2, User, Phone, FileText, Clock, ShieldCheck, CreditCard } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Plans = () => {
  const [activeTab, setActiveTab] = useState('pf');

  const openWhatsApp = (planName) => {
    const phone = "5511999999999"; 
    const message = encodeURIComponent(`Olá! Gostaria de cotar o plano *${planName}* que vi na tabela comparativa do site.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  // --- DADOS DOS CARDS ---
  const plansData = {
    pf: [
      {
        title: "Básico Regional",
        subtitle: "Enfermaria | Grupo de Municípios",
        price: "R$ 189,90",
        features: ["Consultas ilimitadas", "Exames simples", "Rede Própria", "Urgência Nacional (via ABRAMGE)"],
        highlight: false,
        icon: <User className="w-6 h-6" />
      },
      {
        title: "Especial Nacional",
        subtitle: "Enfermaria | Brasil Todo",
        price: "R$ 285,00",
        features: ["Cobertura em todo Brasil", "Obstetrícia inclusa", "Hospitais de Referência", "Opção de Coparticipação"],
        highlight: true,
        icon: <Star className="w-6 h-6" />
      },
      {
        title: "Premium",
        subtitle: "Apartamento | Reembolso",
        price: "R$ 520,00",
        features: ["Acomodação em Apartamento", "Reembolso de Consultas", "Hospitais de Linha A", "Coleta domiciliar"],
        highlight: false,
        icon: <ShieldCheck className="w-6 h-6" />
      }
    ],
    pj: [
      {
        title: "Empresarial Start",
        subtitle: "Regional | Custo-Benefício",
        price: "R$ 139,90",
        features: ["Ideal para MEI (2 vidas)", "Preço reduzido", "Consultas eletivas", "Gestão via App"],
        highlight: false,
        icon: <Building2 className="w-6 h-6" />
      },
      {
        title: "Empresarial Gold",
        subtitle: "Nacional | Sem Copart.",
        price: "R$ 289,90",
        features: ["Sem taxas extras de uso", "Rede Credenciada Ampla", "Inclusão de agregados", "Programas de Saúde"],
        highlight: true,
        icon: <Building2 className="w-6 h-6" />
      },
      {
        title: "Corporativo VIP",
        subtitle: "Apartamento | Livre Escolha",
        price: "Sob Consulta",
        features: ["Reembolso Alto", "Check-up Executivo", "Sala VIP em Hospitais", "Concierge de Saúde"],
        highlight: false,
        icon: <Building2 className="w-6 h-6" />
      }
    ]
  };

  // --- DADOS DA TABELA COMPARATIVA ---
  const comparisonData = {
    pf: [
      { feature: "Consultas e Exames", basico: true, especial: true, premium: true },
      { feature: "Urgência e Emergência", basico: true, especial: true, premium: true },
      { feature: "Cobertura Nacional", basico: false, especial: true, premium: true },
      { feature: "Parto e Obstetrícia", basico: true, especial: true, premium: true },
      { feature: "Acomodação Apartamento", basico: false, especial: false, premium: true },
      { feature: "Reembolso", basico: false, especial: "Parcial", premium: "Integral" },
      { feature: "Cirurgia Refrativa", basico: false, especial: true, premium: true },
    ],
    pj: [
      { feature: "Consultas e Exames", basico: true, especial: true, premium: true },
      { feature: "Isenção de Carência", basico: "Promocional", especial: true, premium: true },
      { feature: "Cobertura Nacional", basico: false, especial: true, premium: true },
      { feature: "Remissão (falecimento)", basico: false, especial: true, premium: true },
      { feature: "Acomodação Apartamento", basico: false, especial: false, premium: true },
      { feature: "Reembolso", basico: false, especial: "Até 2x Tabela", premium: "Até 10x Tabela" },
      { feature: "Check-up Executivo", basico: false, especial: false, premium: true },
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* --- HERO DA PÁGINA DE PLANOS --- */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-nexo-dark sm:text-5xl mb-6"
          >
            A transparência que você procurava
          </motion.h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Compare preços, coberturas e redes. Sem letras miúdas.
          </p>

          {/* TOGGLE SWITCH */}
          <div className="flex justify-center mb-10">
            <div className="bg-gray-100 p-1.5 rounded-full inline-flex relative cursor-pointer">
              <motion.div 
                layout
                className="absolute top-1.5 bottom-1.5 rounded-full bg-white shadow-sm z-0"
                initial={false}
                animate={{
                  left: activeTab === 'pf' ? '6px' : '50%',
                  width: 'calc(50% - 6px)',
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <button 
                onClick={() => setActiveTab('pf')}
                className={`relative z-10 px-8 py-2 rounded-full text-sm font-bold transition-colors w-40 ${activeTab === 'pf' ? 'text-nexo-dark' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Para Você
              </button>
              <button 
                onClick={() => setActiveTab('pj')}
                className={`relative z-10 px-8 py-2 rounded-full text-sm font-bold transition-colors w-40 ${activeTab === 'pj' ? 'text-nexo-dark' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Para Empresa
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- CARDS DE PREÇO --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-10">
        <AnimatePresence mode='wait'>
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {plansData[activeTab].map((plan, index) => (
              <div key={index} className={`relative flex flex-col rounded-2xl transition-all duration-300 ${plan.highlight ? 'bg-white shadow-2xl ring-2 ring-nexo-main scale-105 z-10' : 'bg-white shadow-lg border border-gray-100 hover:shadow-xl'}`}>
                {plan.highlight && (
                  <div className="bg-nexo-main text-white text-xs font-bold uppercase tracking-wide text-center py-2 rounded-t-xl">
                    Recomendado
                  </div>
                )}
                <div className="p-8 flex-1">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${plan.highlight ? 'bg-nexo-light text-nexo-main' : 'bg-gray-100 text-gray-500'}`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-nexo-dark">{plan.title}</h3>
                  <p className="text-sm text-gray-500 mb-6">{plan.subtitle}</p>
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <span className="text-3xl font-bold text-nexo-dark">{plan.price}</span>
                    {plan.price !== "Sob Consulta" && <span className="text-gray-400 text-sm"> /mês</span>}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                        <span className="text-sm text-gray-600">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <button onClick={() => openWhatsApp(plan.title)} className={`w-full py-4 rounded-xl font-bold transition-all shadow-md ${plan.highlight ? 'bg-nexo-main text-white hover:bg-nexo-dark' : 'bg-gray-50 text-nexo-dark hover:bg-gray-100 border border-gray-200'}`}>
                    Solicitar Cotação
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- TABELA COMPARATIVA DETALHADA --- */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-nexo-dark">Comparativo de Recursos</h2>
            <p className="text-gray-500 mt-2">Entenda a diferença técnica entre cada modalidade</p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-nexo-light/30 border-b border-gray-200">
                  <th className="p-6 text-sm font-bold text-gray-500 uppercase tracking-wider">Recurso</th>
                  <th className="p-6 text-center font-bold text-gray-700">{activeTab === 'pf' ? 'Básico' : 'Start'}</th>
                  <th className="p-6 text-center font-bold text-nexo-main">{activeTab === 'pf' ? 'Especial' : 'Gold'}</th>
                  <th className="p-6 text-center font-bold text-nexo-dark">{activeTab === 'pf' ? 'Premium' : 'Corp.'}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData[activeTab].map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="p-5 text-gray-700 font-medium">{row.feature}</td>
                    
                    {/* Coluna 1 */}
                    <td className="p-5 text-center">
                      {row.basico === true ? <Check className="w-5 h-5 text-green-500 mx-auto"/> : 
                       row.basico === false ? <X className="w-5 h-5 text-gray-300 mx-auto"/> : 
                       <span className="text-sm font-semibold text-gray-600">{row.basico}</span>}
                    </td>
                    
                    {/* Coluna 2 */}
                    <td className="p-5 text-center bg-nexo-light/10">
                      {row.especial === true ? <Check className="w-5 h-5 text-green-500 mx-auto"/> : 
                       row.especial === false ? <X className="w-5 h-5 text-gray-300 mx-auto"/> : 
                       <span className="text-sm font-semibold text-nexo-main">{row.especial}</span>}
                    </td>

                    {/* Coluna 3 */}
                    <td className="p-5 text-center">
                      {row.premium === true ? <Check className="w-5 h-5 text-green-500 mx-auto"/> : 
                       row.premium === false ? <X className="w-5 h-5 text-gray-300 mx-auto"/> : 
                       <span className="text-sm font-semibold text-nexo-dark">{row.premium}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- PASSO A PASSO DA CONTRATAÇÃO --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-nexo-dark">Como contratar seu plano?</h2>
            <p className="text-gray-500 mt-2">Processo 100% digital, seguro e rápido.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Linha conectora (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />

            {[
              { icon: <Clock />, title: "1. Cotação", desc: "Você preenche o formulário ou nos chama no WhatsApp." },
              { icon: <FileText />, title: "2. Proposta", desc: "Enviamos as opções comparativas para você escolher." },
              { icon: <ShieldCheck />, title: "3. Validação", desc: "Envio de documentos e assinatura digital segura." },
              { icon: <CreditCard />, title: "4. Carteirinha", desc: "Pronto! Em até 24h seu plano já pode estar ativo." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-6 rounded-xl text-center group"
              >
                <div className="w-24 h-24 bg-nexo-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-nexo-main transition-colors duration-300">
                  <div className="text-nexo-main group-hover:text-white transition-colors duration-300 w-10 h-10 flex items-center justify-center [&>svg]:w-10 [&>svg]:h-10">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => openWhatsApp("Ajuda Geral")}
              className="px-10 py-4 bg-nexo-dark text-white rounded-full font-bold text-lg hover:bg-gray-800 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all"
            >
              Começar Processo Agora
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Plans;