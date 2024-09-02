import React from 'react';
import { GitHub, LinkedIn, Email, WhatsApp } from '@mui/icons-material';

const Contato: React.FC = () => {
  return (
    <section id="contato" className="flex items-center justify-center flex-col min-h-[80vh] w-full p-4">
      <span className='text-2xl font-medium fixed top-24 md:top-20 sm:top-16'>Entre em contato comigo!</span>
      <div className="flex flex-wrap justify-center space-x-6 mb-4">
        <a href="https://github.com/LaisaGarlini" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-marrom-escuro">
          <GitHub fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/laisa-garlini/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-marrom-escuro">
          <LinkedIn fontSize="large" />
        </a>
        <a href="mailto:laisa.garlini@hotmail.com" className="text-gray-800 hover:text-marrom-escuro">
          <Email fontSize="large" />
        </a>
        <a href="https://wa.me/47988862421" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-marrom-escuro">
          <WhatsApp fontSize="large" />
        </a>
      </div>
    </section>
  );
};

export default Contato;