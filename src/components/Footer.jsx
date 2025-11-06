import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h4 className="text-2xl font-serif font-bold text-white mb-2">
              Mariana Rocha Concept
            </h4>
            <p className="text-sm">
              &copy; {year} Mariana Rocha Concept. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://wa.me/SEUNUMERO" // ATUALIZE
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-gray-300 hover:text-primary transition duration-300"
            >
              <FaWhatsapp size={28} />
            </a>
            <a
              href="https://instagram.com/SEUINSTA" // ATUALIZE
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-300 hover:text-primary transition duration-300"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="#" // ATUALIZE (Facebook)
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-300 hover:text-primary transition duration-300"
            >
              <FaFacebook size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;