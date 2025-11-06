import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ana Silva',
    quote: '"Simplesmente amei! O atendimento é impecável e meu cabelo ficou incrível. A Mariana é uma artista!"',
  },
  {
    name: 'Beatriz Costa',
    quote: '"Melhor salão da cidade. Profissionais super atenciosas e o resultado da maquiagem foi perfeito!"',
  },
  {
    name: 'Carla Mendes',
    quote: '"Ambiente maravilhoso, me senti super à vontade. Fiz luzes e o resultado ficou melhor do que eu esperava."',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-dark text-center mb-12">
          O que nossas clientes dizem
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-12"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col justify-between min-h-[250px]">
                <FaQuoteLeft className="text-primary text-3xl mb-4" />
                <p className="text-gray-600 italic text-lg mb-6">
                  {item.quote}
                </p>
                <div>
                  <h4 className="font-serif font-bold text-lg text-text-dark">
                    {item.name}
                  </h4>
                  <div className="flex text-primary mt-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;