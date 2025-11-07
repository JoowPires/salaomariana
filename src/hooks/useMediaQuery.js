// src/hooks/useMediaQuery.js

import { useState, useEffect } from 'react';

/**
 * Um hook que nos diz se o tamanho da tela corresponde a uma media query.
 * Ex: useMediaQuery('(max-width: 768px)')
 */
function useMediaQuery(query) {
  // Guarda o estado (true/false) se a query corresponde
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Pega a media query da janela
    const media = window.matchMedia(query);

    // Atualiza o estado se a media query mudar (ex: ao redimensionar)
    const listener = () => {
      setMatches(media.matches);
    };

    // Adiciona o "ouvinte"
    // (Usamos o método .addEventListener que é mais moderno)
    try {
      media.addEventListener('change', listener);
    } catch (e) {
      // Fallback para navegadores mais antigos (Safari 13)
      media.addListener(listener);
    }

    // Define o estado inicial na primeira vez que o componente carrega
    setMatches(media.matches);

    // Limpa o "ouvinte" quando o componente é desmontado
    return () => {
      try {
        media.removeEventListener('change', listener);
      } catch (e) {
        media.removeListener(listener);
      }
    };
  }, [query]); // Só re-executa o efeito se a 'query' mudar

  return matches;
}

export default useMediaQuery;