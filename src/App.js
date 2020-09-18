import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import styled from '@emotion/styled';
import Spinner from './components/Spinner';


const StContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const StFormContainer = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;
const StMessage = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;



function App() {

  const [resumen, setResumen] = useState({})

  const { cotizacion , datos } = resumen
  
  const [cargando, setCargando] = useState(false);


  return (
    <StContainer>
      <Header
        titulo='Cotizador de Seguros'
      />
      <StFormContainer>
        <Form
          setResumen={ setResumen }
          setCargando={ setCargando }
        />

        {
          cargando ? <Spinner/> : null
        }
        
        {}
        {
          datos &&  <Resumen  datos={ datos }/>
        }

        
        {
          datos 
          ?  
            <Resultado  cotizacion={ cotizacion }/>
          :
            (  !cargando ? <StMessage>Elige marca, año y tipo de seguro</StMessage> : null)
        }
        
        
      </StFormContainer>
    </StContainer>
  );
}

export default App;
