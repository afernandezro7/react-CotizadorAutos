import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const StResultado = styled.div`
  text-align: center;
  padding: 0%.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const StCotizacion = styled.p`
  
  color: #00838F;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  padding: 1rem;
  text-transform: uppercase;
`;



const Resultado = ({cotizacion}) => {

    return (
        <StResultado>
            <TransitionGroup
                component="span"
                className="resultado"
            >
                <CSSTransition
                    classNames="resultado"
                    key={cotizacion}
                    timeout={{ enter: 500, exit:500 }}
                >
                    <StCotizacion>El total es: $ <span>{cotizacion}</span></StCotizacion>
                </CSSTransition>
            </TransitionGroup>

            
        </StResultado>
    )
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}

export default Resultado
