import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Shield, User, Building2, Phone, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Quote = () => {
  // Estado do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipo: 'pf', // pf ou pj
    vidas: '',
    mensagem: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // AQUI VOCÊ INTEGRARIA COM SEU EMAIL OU CRM
    // Por enquanto, vamos apenas simular o sucesso
    console.log("Dados enviados:", formData);
    
    // Simula envio e mostra mensagem de sucesso
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
          
          {/* --- LADO ESQUERDO: Visual / Venda --- */}
          <div className="lg:w-5/12 bg-nexo-dark text-white p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Elementos Decorativos de Fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-nexo-main/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Receba uma proposta detalhada</h2>
              <p className="text-gray-300 text-lg mb-8">
                Preencha seus dados e nossos especialistas farão um estudo comparativo das melhores operadoras para o seu perfil.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-lg mr-4">
                    <Shield className="w-6 h-6 text-nexo-main" />
                  </div>
                  <div>
                    <h4 className="font-bold">Análise Jurídica</h4>
                    <p className="text-sm text-gray-400">Verificamos carências e coberturas contratuais.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-lg mr-4">
                    <Building2 className="w-6 h-6 text-nexo-main" />
                  </div>
                  <div>
                    <h4 className="font-bold">Redução de Custos</h4>
                    <p className="text-sm text-gray-400">Encontramos a melhor tabela para sua região.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-lg mr-4">
                    <CheckCircle className="w-6 h-6 text-nexo-main" />
                  </div>
                  <div>
                    <h4 className="font-bold">Sem Compromisso</h4>
                    <p className="text-sm text-gray-400">A consultoria e a cotação são 100% gratuitas.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400">Prefere falar agora?</p>
              <div className="flex items-center gap-2 mt-2 text-xl font-bold">
                <Phone className="w-5 h-5 text-nexo-main" />
                (11) 99999-9999
              </div>
            </div>
          </div>

          {/* --- LADO DIREITO: Formulário --- */}
          <div className="lg:w-7/12 p-8 lg:p-12 bg-white">
            {submitted ? (
              // TELA DE SUCESSO
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Solicitação Enviada!</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-8">
                  Recebemos seus dados com sucesso. Em instantes um de nossos consultores entrará em contato com sua proposta personalizada.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-nexo-main font-bold hover:underline"
                >
                  Enviar nova cotação
                </button>
              </motion.div>
            ) : (
              // FORMULÁRIO
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Dados para contato</h3>
                
                {/* Tipo de Cotação */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, tipo: 'pf'})}
                    className={`py-3 px-4 rounded-xl border-2 font-bold transition-all ${formData.tipo === 'pf' ? 'border-nexo-main bg-nexo-light/30 text-nexo-main' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                  >
                    Para Mim / Família
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, tipo: 'pj'})}
                    className={`py-3 px-4 rounded-xl border-2 font-bold transition-all ${formData.tipo === 'pj' ? 'border-nexo-main bg-nexo-light/30 text-nexo-main' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                  >
                    Para Empresa (CNPJ)
                  </button>
                </div>

                {/* Campos */}
                <div className="grid grid-cols-1 gap-6">
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                    <input 
                      type="text" name="nome" required placeholder="Seu nome completo"
                      value={formData.nome} onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-nexo-main focus:ring-2 focus:ring-nexo-main/20 outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                      <input 
                        type="email" name="email" required placeholder="Seu melhor e-mail"
                        value={formData.email} onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-nexo-main focus:ring-2 focus:ring-nexo-main/20 outline-none transition-all"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                      <input 
                        type="tel" name="telefone" required placeholder="WhatsApp (DDD)"
                        value={formData.telefone} onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-nexo-main focus:ring-2 focus:ring-nexo-main/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {formData.tipo === 'pj' && (
                    <div className="relative">
                      <Building2 className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
                      <select 
                        name="vidas" 
                        value={formData.vidas} onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-nexo-main focus:ring-2 focus:ring-nexo-main/20 outline-none transition-all bg-white text-gray-600 appearance-none"
                      >
                        <option value="">Quantas vidas (funcionários + sócios)?</option>
                        <option value="02-05">02 a 05 vidas</option>
                        <option value="06-29">06 a 29 vidas</option>
                        <option value="30-99">30 a 99 vidas</option>
                        <option value="100+">Acima de 100 vidas</option>
                      </select>
                    </div>
                  )}

                  <textarea 
                    name="mensagem" placeholder="Alguma observação? (Ex: Tenho preferência pelo Hospital X...)"
                    value={formData.mensagem} onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-nexo-main focus:ring-2 focus:ring-nexo-main/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-nexo-main text-white font-bold py-4 rounded-xl shadow-lg hover:bg-nexo-dark hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Receber Cotação Gratuita
                </button>

                <p className="text-xs text-center text-gray-400 mt-4">
                  Seus dados estão seguros. Respeitamos a LGPD e não enviamos spam.
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Quote;