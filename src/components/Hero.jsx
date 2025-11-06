import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

const slides = [
  {
    image: '/img/Promoção.png',
  
  },
  {
    image: 'https://picsum.photos/seed/salon2/1600/900',
    title: 'Estúdio de Beleza Completo',
    subtitle: 'Maquiagem, unhas e tratamentos faciais.',
  },
  {
    image: 'https://picsum.photos/seed/salon3/1600/900',
    title: 'Sinta-se em casa',
    subtitle: 'Um ambiente pensado para o seu bem-estar.',
  },
];

const Hero = () => {
  return (
    <section id="hero" className="h-[80vh] w-full mt-32"> {/* Ajuste a altura aqui */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="slide"
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
            className="h-full w-full bg-contain bg-center bg-no-repeat" //
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="h-full w-full bg-white bg-opacity-0 flex items-center justify-center">
                <div className="text-center text-white px-6">
                  <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl font-sans mb-8">
                    {slide.subtitle}
                  </p>
            
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;