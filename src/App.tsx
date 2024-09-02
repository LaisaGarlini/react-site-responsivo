import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ResumoProfissional from './components/ResumoProfissional';
import Habilidades from './components/Habilidades';
import Contato from './components/Contato';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resumo-profissional" element={<ResumoProfissional />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;