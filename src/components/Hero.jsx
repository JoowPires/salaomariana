import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Importamos o nosso Hook
import useMediaQuery from '../hooks/useMediaQuery';

// ==========================================================
// **SUA TAREFA**: Atualize os "3 Banners Principais"
// ==========================================================

// Slides para Desktop (fotos horizontais / paisagem)
const desktopSlides = [
  // --- SEUS 3 BANNERS PRINCIPAIS (DESKTOP) ---
  {
    image: '/img/banner.jpeg', // <-- SUA IMAGEM 1
  },
  {
    image: '/img/equipe.png', // <-- SUA IMAGEM 2
  },
  {
    image: 'https://picsum.photos/seed/desktop5/1920/1080', // <-- SUA IMAGEM 3
    title: 'Seu Dia de Noiva',
    subtitle: 'Pacotes especiais para momentos inesquecíveis.',
    buttonText: 'Saiba Mais',
    buttonLink: '#services',
  },
  // --- FOTOS ALEATÓRIAS (PLACEHOLDERS) ---
];

// Slides para Mobile (fotos verticais / retrato)
const mobileSlides = [
  // --- SEUS 3 BANNERS PRINCIPAIS (MOBILE) ---
  {
    image: '/img/Promoção.png', // <-- SUA IMAGEM 1
  },
  // --- FOTOS ALEATÓRIAS (PLACEHOLDERS) ---
  {
    image: '/img/equipemobile.png',
    
  },
  {
    image: 'https://picsum.photos/seed/mobile5/1080/1920',
    title: 'Sinta-se em Casa',
    subtitle: 'Um espaço para relaxar.',
    buttonText: 'Conheça o Estúdio',
    buttonLink: '#gallery',
  },
];

const Hero = () => {
  // Verificamos se a tela é menor que 768px
  const isMobile = useMediaQuery('(max-width: 767px)');

  // Seleciona a lista de slides correta com base no isMobile
  const currentSlides = isMobile ? mobileSlides : desktopSlides;

  return (
    // Lembre-se de ajustar a altura (ex: h-[80vh]) e a margem (ex: mt-20)
    <section id="hero" className="h-[80vh] w-full mt-20"> 
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true} // Adicionamos setas de navegação
        className="h-full w-full"
      >
        {currentSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center bg-white flex items-center justify-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay escuro para melhorar a leitura do texto */}
              <div className="absolute inset-0 bg-black opacity-40"></div>

              {/* Conteúdo do slide */}
              <div className="relative z-10 text-center text-white p-4">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8">
                  {slide.subtitle}
                </p>
                {slide.buttonText && (
                  <a
                    href={slide.buttonLink}
                    className="bg-primary text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-dark transition duration-300" // Corrigi o botão de volta para o tema rosê
                  >
                    {slide.buttonText}
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;