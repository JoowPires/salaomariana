import React from 'react';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-dark text-center mb-12">
          Entre em Contato
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-serif text-text-dark mb-6">
              Envie uma mensagem
            </h3>
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email ou WhatsApp
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-primary-dark transition duration-300"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-serif text-text-dark mb-6">
              Nossas Informações
            </h3>
            <p className="text-gray-600 mb-6">
              Agende seu horário ou venha nos fazer uma visita! Estamos
              prontos para te receber.
            </p>
            <div className="space-y-4">
              <a
                href="https://wa.me/SEUNUMERO" // ATUALIZE
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg text-gray-700 hover:text-primary transition"
              >
                <FaWhatsapp className="mr-3 text-2xl text-primary" />
                (11) 91234-5678
              </a>
              <a
                href="mailto:seuemail@exemplo.com" // ATUALIZE
                className="flex items-center text-lg text-gray-700 hover:text-primary transition"
              >
                <FaEnvelope className="mr-3 text-2xl text-primary" />
                seuemail@exemplo.com
              </a>
              <a
                href="#" // ATUALIZE (Google Maps)
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg text-gray-700 hover:text-primary transition"
              >
                <FaMapMarkerAlt className="mr-3 text-2xl text-primary" />
                Rua Exemplo, 123 - Bairro, São Paulo - SP
              </a>
              <a
                href="https://www.instagram.com/marianarochaconcept?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" // ATUALIZE
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg text-gray-700 hover:text-primary transition"
              >
                <FaInstagram className="mr-3 text-2xl text-primary" />
                @marianarochaconcept
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;