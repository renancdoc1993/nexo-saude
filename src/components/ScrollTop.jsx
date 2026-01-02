import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Pega o caminho atual da URL (ex: /, /planos, /sobre)
  const { pathname } = useLocation();

  useEffect(() => {
    // Sempre que o caminho mudar, joga a tela para o topo (x=0, y=0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Esse componente não mostra nada visualmente
};

export default ScrollToTop;