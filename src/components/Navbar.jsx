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
        {/* Logo/Nome (ou sua <img> da logo) */}
        <a href="#hero" className="text-2xl font-serif font-bold text-primary">
          <img 
            src="/img/logo.png" // Verifique se este é o caminho da sua logo
            alt="Mariana Rocha Concept Logo" 
            className="h-20" // Ajuste a altura (h-10, h-12, etc.)
          />
        </a>

        {/* ======================================= */}
        {/* GRUPO DA DIREITA (DESKTOP) */}
        {/* Fica escondido no telemóvel */}
        {/* ======================================= */}
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
            href= 'https://api.whatsapp.com/send?phone=5511985309489&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+agendar+um+horario.+'
            target="_blank"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition duration-300"
          >
            Agende seu Horário
          </a>
        </div>

        {/* ======================================= */}
        {/* GRUPO DA DIREITA (MOBILE) */}
        {/* Aparece APENAS no telemóvel (md:hidden) */}
        {/* ======================================= */}
        <div className="md:hidden flex items-center space-x-3"> {/* Use space-x-3 ou space-x-4 */}
          
          {/* Botão "Agendar" (Sempre visível no mobile) */}
          <a
            href="https://api.whatsapp.com/send?phone=5511985309489&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+agendar+um+horario.+"
            // Usamos text-sm (pequeno) para caber bem
            target="_blank"
            className="bg-primary text-white px-3 py-2 rounded-md hover:bg-primary-dark transition duration-300 text-sm font-medium"
          >
            Agendar
          </a>
          
          {/* Botão Menu Mobile (Hambúrguer) */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* ======================================= */}
      {/* MENU DROPDOWN (MOBILE) */}
      {/* O botão "Agendar" foi REMOVIDO daqui */}
      {/* ======================================= */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
                className="text-gray-600 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            {/* O botão "Agende seu Horário" não está mais aqui */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;