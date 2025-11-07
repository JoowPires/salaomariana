import React from 'react';

// Importamos o Swiper e os módulos (vamos precisar deles para o mobile)
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Importamos o nosso novo Hook
import useMediaQuery from '../hooks/useMediaQuery'; // Ajuste o caminho se necessário

import { FaCut, FaPaintBrush, FaMagic } from 'react-icons/fa';
import { GiHairStrands, GiLipstick, GiNails } from 'react-icons/gi';

// (Os imports do CSS do Swiper já estão no seu index.css)

const services = [
  { icon: FaCut, title: 'Cortes Modernos' },
  { icon: FaPaintBrush, title: 'Coloração e Mechas' },
  { icon: GiHairStrands, title: 'Tratamentos Capilares' },
  { icon: FaMagic, title: 'Penteados para Festas' },
  { icon: GiLipstick, title: 'Maquiagem Profissional' },
  { icon: GiNails, title: 'Manicure & Pedicure' },
];

const Services = () => {
  // 1. AQUI ESTÁ A MÁGICA
  // Estamos a verificar se a tela é menor que 768px (o breakpoint 'md' do Tailwind)
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <section id="services" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-6 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-dark mb-4 text-center">
          Nossos Serviços
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          Oferecemos uma gama completa de serviços para realçar sua beleza
          natural e cuidar de você.
        </p>

        {/* 2. RENDERIZAÇÃO CONDICIONAL */}
        {isMobile ? (
          /* ======================================= */
          /* =====   LAYOUT MOBILE (COVERFLOW)   ===== */
          /* ======================================= */
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            slidesPerView={1.5} // Mostra 1.5 slides no mobile
            className="pb-12"
          >
            {services.map((service) => (
              <SwiperSlide key={service.title} className="h-auto">
                <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                  <div className="flex justify-center items-center mb-4">
                    <service.icon className="text-primary" size={48} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-text-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    eget.
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        ) : (
          
          /* ======================================= */
          /* =====   LAYOUT DESKTOP (GRELHA)     ===== */
          /* ======================================= */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center items-center mb-4">
                  <service.icon className="text-primary" size={48} />
                </div>
                <h3 className="text-xl font-serif font-bold text-text-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eget.
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;