import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <Container>
        <div className="header-content">
          <div className="header-text">
            <h1 className="header-title">Ingeniería en Sistemas</h1>
            <p className="header-subtitle">Innovación, Tecnología y Futuro</p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
