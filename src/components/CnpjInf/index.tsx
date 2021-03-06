import React from 'react';
import {
  Container
} from './styles';

const CnpjInf: React.FC = () => {
  return (
    <Container>
      <div className='line-information'>
        <p>SITUAÇÃO CADASTRAL:</p>
        <a className='active'>ATIVA</a>
      </div>
      <div className='line-information'>
        <p>Principal atividade econômica:</p>
        <a className='incress-weight'>Suporte tal</a>
      </div>
      <div className='line-information'>
        <p>Endereço:</p>
        <a className='adress'>Rua Fulano de tal, 000, São Paulo - SP,  40000-000</a>
      </div>
    </Container>
    
  );
}

export default CnpjInf;