import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

// ==========================================================
// **SUA TAREFA**: Atualize esta lista com suas fotos
// Coloque suas fotos na pasta `public/`
// ==========================================================
const sliders = [
  {
    before: '/img/antes1.png', // Ex: /public/antes-cabelo-loiro.jpg
    after: '/img/depois1.png',  // Ex: /public/depois-cabelo-loiro.jpg
    title: 'Transformação de Cor (Loiro)',
  },
  {
    before: '/antes-corte.jpg', // Ex: /public/antes-corte.jpg
    after: '/depois-corte.jpg',  // Ex: /public/depois-corte.jpg
    title: 'Corte e Reconstrução',
  },
  {
    before: '/antes-maquiagem.jpg', // Ex: /public/antes-maquiagem.jpg
    after: '/depois-maquiagem.jpg',  // Ex: /public/depois-maquiagem.jpg
    title: 'Maquiagem de Festa',
  },
  // Adicione quantos sliders "antes e depois" você quiser
];


const Gallery = () => {
  // Não precisamos mais do 'useState' nem do 'Lightbox'
  
  return (
    // Note que mudei o fundo para 'bg-white' para variar
    // da seção de Serviços e dar mais destaque aos sliders.
    <section id="gallery" className="py-20 bg-white"> 
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-dark mb-12">
          Galeria (Antes e Depois)
        </h2>
        
        {/* Usamos um grid para mostrar os sliders.
          Se você tiver 3 sliders, 'lg:grid-cols-3' fica ótimo.
          Se tiver 2 ou 4, 'md:grid-cols-2' é melhor.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {sliders.map((slider, index) => (
            <div key={index}>
              {/* O Componente do Slider */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <ReactCompareSlider
                  // Força uma proporção quadrada.
                  // Mude para 'aspect-[4/3]' se suas fotos forem retangulares.
                  className="w-full aspect-square" 
                  itemOne={<ReactCompareSliderImage src={slider.before} alt="Foto do Antes" />}
                  itemTwo={<ReactCompareSliderImage src={slider.after} alt="Foto do Depois" />}
                />
              </div>
              
              {/* Título abaixo do slider */}
              <h3 className="text-xl font-serif font-bold text-text-dark mt-6">
                {slider.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Gallery;