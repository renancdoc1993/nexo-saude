import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, HandCoins, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* --- HERO: Autoridade Imediata --- */}
      <div className="pt-32 pb-20 bg-nexo-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            >
              Expertise que gera <br/>
              <span className="text-nexo-main">segurança real.</span>
            </motion.h1>
            <p className="text-gray-300 text-xl leading-relaxed max-w-lg mb-8">
              No mercado de saúde, experiência não é luxo, é necessidade. 
              São mais de 20 anos dominando as regras do jogo para oferecer o melhor ao seu favor.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border-l-4 border-nexo-main">
                <span className="block text-2xl font-bold text-white">+20 Anos</span>
                <span className="text-sm text-gray-400">De Mercado</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border-l-4 border-nexo-main">
                <span className="block text-2xl font-bold text-white">+15 Mil</span>
                <span className="text-sm text-gray-400">Vidas Seguradas</span>
              </div>
            </div>
          </div>
          
          {/* Imagem de Impacto (Profissionalismo) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 w-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Consultoria Especializada" 
              className="rounded-2xl shadow-2xl border-4 border-nexo-main/20 w-full object-cover h-[400px]"
            />
          </motion.div>
        </div>
      </div>

      {/* --- O QUE NOS DIFERENCIA (Benefício para o Usuário) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-nexo-dark">Por que escolher quem entende do assunto?</h2>
            <p className="text-gray-500 mt-2 text-lg">Não somos um "app" impessoal. Somos especialistas em resolver problemas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-nexo-main mb-6 group-hover:bg-nexo-main group-hover:text-white transition-colors">
                <HandCoins size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">O Melhor Custo-Benefício</h3>
              <p className="text-gray-600 leading-relaxed">
                Conhecemos todas as tabelas, promoções e brechas legais para reduzir o custo do seu plano sem reduzir a qualidade da cobertura.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-nexo-main mb-6 group-hover:bg-nexo-main group-hover:text-white transition-colors">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Segurança Jurídica</h3>
              <p className="text-gray-600 leading-relaxed">
                Planos de saúde têm "letras miúdas". Nossa função é blindar você de carências abusivas, reajustes indevidos e redes que não atendem.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-nexo-main mb-6 group-hover:bg-nexo-main group-hover:text-white transition-colors">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resolução Ágil</h3>
              <p className="text-gray-600 leading-relaxed">
                Temos acesso direto dentro das operadoras. Se você tiver um problema de autorização, nós resolvemos. Você não fica pendurado no 0800.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL (Conversão) --- */}
      <section className="py-20 bg-nexo-main relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Não arrisque a saúde da sua família com amadores.
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Fale agora com um consultor sênior e tenha a certeza de estar contratando o plano certo.
          </p>
          <button className="bg-white text-nexo-main px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto">
            <Phone size={24} />
            Falar com Especialista
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;