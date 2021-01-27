import React, { MouseEvent } from 'react';

import { Container } from './styles';

const DataContainer: React.FC = () => {

  const toggleClass = (event: MouseEvent) => {
    event.preventDefault();
    if (event.currentTarget.parentElement) {
      event.currentTarget.parentElement.classList.toggle('active')
    }
  }

  return (
    <Container>
      <div className='initial-bar' >
        <div className="initial-header-bar" onClick={toggleClass}>
          <h2>Exemplo</h2>
          <div className="red-total-bar">
            <h4>R$102.020.100,00</h4>
          </div>
        </div>
        <div className="initial-content">
          <div className="initial-content-line">
            <a href="/deputado/nome" className='highlight-text'> Deputado </a>
            <p>R$ 30.203.021,00</p>
          </div>
          <div className="initial-content-line">
            <a href="/deputado/nome" className='highlight-text'> Deputado </a>
            <p>R$ 30.203.021,00</p>
          </div>
          <div className="initial-content-line">
            <a href="/deputado/nome" className='highlight-text'> Deputado </a>
            <p>R$ 30.203.021,00</p>
          </div>
          <div className="initial-content-line">
            <a href="/partido/icon" className='highlight-text'> Teste </a>
            <p>R$ 30.203.021,00</p>
          </div>
          <a href="/deputado/nome" className="link-page highlight-text">
          Página da entidade
        </a>
        </div>
      </div>
    </Container>
  );
}

export default DataContainer;