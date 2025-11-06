import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#services' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a 
        href="#hero" className="text-2xl font-serif font-bold text-primary">
          <img src="/img/logosite.png" alt="" className="h-20"/>
       
        </a>

        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-primary transition duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition duration-300"
          >
            Agende seu Horário
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white text-center px-4 py-2 rounded-md hover:bg-primary-dark transition duration-300"
            >
              Agende seu Horário
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;