import React from 'react';
import { FaCut, FaPaintBrush, FaMagic } from 'react-icons/fa';
import { GiHairStrands, GiLipstick, GiNails } from 'react-icons/gi';

const services = [
  { icon: FaCut, title: 'Cortes Modernos' },
  { icon: FaPaintBrush, title: 'Coloração e Mechas' },
  { icon: GiHairStrands, title: 'Tratamentos Capilares' },
  { icon: FaMagic, title: 'Penteados para Festas' },
  { icon: GiLipstick, title: 'Maquiagem Profissional' },
  { icon: GiNails, title: 'Manicure & Pedicure' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-dark mb-4">
          Nossos Serviços
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Oferecemos uma gama completa de serviços para realçar sua beleza
          natural e cuidar de você.
        </p>

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
      </div>
    </section>
  );
};

export default Services;