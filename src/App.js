import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Componentes
import Header from './front/components/Header';
import Navigation from './front/components/Navigation';
import Footer from './front/components/Footer';

// Páginas
import Home from './front/pages/Home';
import About from './front/pages/About';
import Curriculum from './front/pages/Curriculum';
import Admissions from './front/pages/Admissions';
import Contact from './front/pages/Contact';
import Login from './front/pages/Login.tsx';
import Registro from './front/pages/Registro.tsx';
import Formulario from './front/pages/Formulario';
import NotFound from './front/pages/NotFound';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/plan-estudios" element={<Curriculum />} />
            <Route path="/admisiones" element={<Admissions />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
