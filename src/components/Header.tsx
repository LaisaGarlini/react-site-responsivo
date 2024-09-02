import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav className="bg-marrom-escuro p-4 text-white">
      <ul className="flex flex-wrap justify-center md:justify-start space-x-4 text-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resumo-profissional">Resumo Profissional</Link></li>
        <li><Link to="/habilidades">Habilidades</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
};

export default Header;