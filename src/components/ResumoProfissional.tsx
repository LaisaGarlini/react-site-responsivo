import React from 'react';

const ResumoProfissional: React.FC = () => {
  return (
    <section id="resumo-profissional" className="flex items-center justify-center flex-col min-h-[80vh] w-full p-4">
      <span className='text-2xl font-medium mb-8 sm:mb-6'>Meu resumo profissional</span>
      <div className='w-4/5 p-3 shadow-xl my-4 rounded-lg bg-marrom-claro2'>
        <span className='text-xl font-semibold'>Vexta Systems</span>
        <br />
        <span className='text-base'>Desenvolvedor de software - </span>
        <span className='text-sm italic'>abril de 2023 - atualmente (1 ano e 5 meses)</span>
        <br />
        <span className='text-sm'>
          Desenvolvo melhorias, correções e manutenções em um ERP voltado para área têxtil.
          É uma aplicação web desenvolvida em Delphi 7 e utiliza SQL Server como banco de dados.
          Utilizo também HTML, CSS e JS para a parte de front end.
        </span>
      </div>
      <div className='w-4/5 p-3 shadow-xl my-4 rounded-lg bg-marrom-claro2'>
        <span className='text-xl font-semibold'>IPM Sistemas</span>
        <br />
        <span className='text-base'>Desenvolvedor de software - </span>
        <span className='text-sm italic'>fevereiro de 2021 - março de 2023 (2 anos e 2 meses)</span>
        <br />
        <span className='text-sm'>
          Migração de dados por meio de uma aplicação em Delphi 7 onde cada tabela recebia seus tratamentos
          e configurações específicas. Montagem de SQL para trabalhar com os dados de migração.
          Utilizam-se alguns bancos de dados como PostgreSQL, SQLServer, MySQL e MongoDB.
          Módulo tributário.
        </span>
      </div>
    </section>
  );
};

export default ResumoProfissional;