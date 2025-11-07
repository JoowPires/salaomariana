import React from 'react';

// 1. IMPORTAMOS O SWIPER E OS MÓDULOS NECESSÁRIOS
import { Swiper, SwiperSlide } from 'swiper/react';
// Não precisamos mais do EffectCards, apenas Navigation e Pagination
import { Pagination, Navigation } from 'swiper/modules'; 
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

// 2. IMPORTAMOS O NOSSO HOOK DE MEDIA QUERY
import useMediaQuery from '../hooks/useMediaQuery'; // Ajuste o caminho se necessário

// (Os imports do CSS do Swiper já estão no seu index.css)


// ==========================================================
// Lista de sliders
// ==========================================================
const sliders = [
  {
    before: '/img/antes1.png',
    after: '/img/depois1.png',
    title: 'Transformação de Cor (Loiro)',
  },
  {
    before: '/antes-corte.jpg',
    after: '/depois-corte.jpg',
    title: 'Corte e Reconstrução',
  },
  {
    before: '/antes-maquiagem.jpg',
    after: '/depois-maquiagem.jpg',
    title: 'Maquiagem de Festa',
  },
];


const Gallery = () => {
  // 3. VERIFICAMOS SE É TELEMÓVEL (MOBILE)
  const isMobile = useMediaQuery('(max-width: 767px)');
  
  return (
    <section id="gallery" className="py-20 bg-white"> 
      <div className="container mx-auto px-6 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-dark mb-12 text-center">
          Galeria (Antes e Depois)
        </h2>
        
        {/* 4. RENDERIZAÇÃO CONDICIONAL */}
        {isMobile ? (
          /* ======================================= */
          /* =====   LAYOUT MOBILE (SLIDER SIMPLES)  ===== */
          /* ======================================= */
          <div className="w-full max-w-lg mx-auto"> {/* Container para centralizar */}
            <Swiper
              modules={[Pagination, Navigation]}
              navigation={true}     // <-- Mostra as SETAS
              pagination={{ clickable: true }} // <-- Mostra as BOLINHAS
              slidesPerView={1}     // <-- Mostra 1 slide de cada vez
              spaceBetween={30}     // Espaço (caso precise)
              loop={true}
              
              // ======================================================
              // AQUI ESTÁ A CORREÇÃO PRINCIPAL:
              // Desativa o deslizar com o dedo (touch) no slider principal,
              // permitindo que o dedo interaja com o slider de comparação.
              allowTouchMove={false}
              // ======================================================
              
              className="pb-12" // Espaço para as bolinhas
            >
              {sliders.map((slider, index) => (
                <SwiperSlide key={index}>
                  {/* O slider de comparação */}
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <ReactCompareSlider
                      className="w-full aspect-square" // Usamos aspecto quadrado
                      itemOne={<ReactCompareSliderImage src={slider.before} alt="Foto do Antes" />}
                      itemTwo={<ReactCompareSliderImage src={slider.after} alt="Foto do Depois" />}
                    />
                  </div>
                  {/* Título abaixo do slider */}
                  <h3 className="text-xl font-serif font-bold text-text-dark mt-6 text-center">
                    {slider.title}
                  </h3>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
        ) : (

          /* ======================================= */
          /* =====   LAYOUT DESKTOP (GRELHA)     ===== */
          /* ======================================= */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sliders.map((slider, index) => (
              <div key={index}>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <ReactCompareSlider
                    className="w-full aspect-square" 
                    itemOne={<ReactCompareSliderImage src={slider.before} alt="Foto do Antes" />}
                    itemTwo={<ReactCompareSliderImage src={slider.after} alt="Foto do Depois" />}
                  />
                </div>
                
                <h3 className="text-xl font-serif font-bold text-text-dark mt-6 text-center">
                  {slider.title}
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;