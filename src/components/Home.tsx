import React from 'react';
import laisa from '../assets/laisa.jpg';

const Home: React.FC = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] w-full p-4">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={laisa} alt="foto laisa" className="w-3/4 md:w-1/2 lg:w-[400px]"/>
      </div>
      <div className="w-full md:w-1/2 flex justify-center text-center mt-4 md:mt-0">
        <span className="text-lg md:text-xl lg:text-2xl font-medium">Bem-vindo ao meu site pessoal :)</span>
      </div>
    </section>
  );
};

export default Home;