import React from 'react';

const Habilidades: React.FC = () => {
  return (
    <section id="resumo-profissional" className="flex items-center justify-center flex-col min-h-[80vh] w-full p-4">
      <span className='text-2xl font-medium mb-8 sm:mb-6'>Minhas habilidades</span>
      <div className='w-full h-full flex flex-col lg:flex-row justify-center items-center'>
        <div className='w-full lg:w-1/2 px-2 flex flex-col items-center'>
          <div className='w-full sm:w-4/5 p-3 shadow-xl my-4 rounded-lg bg-marrom-claro2 mx-auto'>
            <span className='text-base font-semibold'>Delphi 7</span>
            <br />
            <span className='text-sm'>Experiência profissional na IPM Sistemas e Vexta Systems.</span>
          </div>
          <div className='w-full sm:w-4/5 p-3 shadow-xl my-4 rounded-lg bg-marrom-claro2 mx-auto'>
            <span className='text-base font-semibold'>SQLServer</span>
            <br />
            <span className='text-sm'>Experiência profissional na IPM Sistemas e Vexta Systems.</span>
          </div>
          <div className='w-full sm:w-4/5 p-3 shadow-xl my-4 rounded-lg bg-marrom-claro2 mx-auto'>
            <span className='text-base font-semibold'>PostgreSQL</span>
            <br />
            <span className='text-sm'>Experiência profissional na IPM Sistemas e Vexta Systems e em projetos pessoais.</span>
          </div>
        </div>
        <div className='w-full lg:w-1/2 px-2 flex flex-col items-center'>
          <div className='w-full sm:w-4/5 p-3 shadow-xl my-4 rounded-lg bg-marrom-claro2 mx-auto'>
            <span className='text-base font-semibold'>React</span>
            <br />
            <span className='text-sm'>Experiência em projetos pessoais.</span>
          </div>
          <div className='w-full sm:w-4/5 p-3 shadow-xl my-4 rounded-lg bg-marrom-claro2 mx-auto'>
            <span className='text-base font-semibold'>Python</span>
            <br />
            <span className='text-sm'>Experiência em projetos pessoais.</span>
          </div>
          <div className='w-full sm:w-4/5 p-3 shadow-xl my-4 rounded-lg bg-marrom-claro2 mx-auto'>
            <span className='text-base font-semibold'>Node.js</span>
            <br />
            <span className='text-sm'>Experiência em projetos pessoais e atualmente fazendo curso.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;