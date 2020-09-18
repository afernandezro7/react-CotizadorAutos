import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { capitalize } from '../helpers/helper';

const StResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;



const Resumen = ({datos}) => {

    const {marca, year, plan} = datos;

    return (
        <StResumen>
           <h2>Resumen de Cotización</h2> 
           <ul>
                <li>Marca: {capitalize(marca)}</li>
                <li>Plan: {capitalize(plan)}</li>
                <li>Año del Auto: {year}</li>
           </ul>
        </StResumen>
    )
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen
