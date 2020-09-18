import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { calcularMarca, calcularPlan, obtenerDiferenciaYear } from '../helpers/helper';

const StField = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const StLabel = styled.label`
    flex: 0 0 100px;  
`;
const StSelect= styled.select`
    display: block ;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance:none;
`;
const StInputRadio= styled.input`
    margin: 0 1rem;
`;
const StButton= styled.button`
    background-color: #00838f;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    margin-top: 2rem;
    padding: 1rem;
    text-transform: uppercase;
    width: 100%;
    transition: background-color .3s ease;

    &:hover{
        background-color: #26c6da;
        cursor: pointer;
    }
`;

const StError = styled.div`
    background-color: red;
    color: white;
    padding: 1rem 0;
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
`;




const Form = ({setResumen,setCargando}) => {

    const [datos, setDatos] = useState({
        marca:'',
        year: '',
        plan: ''
    });

    const [error, setError] = useState(false)

    // Extraer los valores destructurando datos
    const {marca, year, plan } = datos;

    //Leer los datos del formulario
    const handleChange = ({target})=>{

        setDatos({
            ...datos,
            [target.name]: target.value
        })
        
    }

    //manejar submit
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        // validar los datos
        if(marca.trim() ==="" || year.trim() ==="" || plan.trim()==="" ){
            setError(true);
            return;
        }

        setError(false);

        // Precio base de 2000
        let resultado = 2000

        // Obtener la diferencia de Años
        const diferenciaYear = obtenerDiferenciaYear(parseInt(year));
        

        // Por Cada año hay que restar el 3%
        resultado -=  resultado*diferenciaYear*0.03;


        // Incrementos por marca (Americano:15%, Europeo:30%, Asiatico:5%)
        resultado *= calcularMarca(marca);

        // Basico aumenta 20% y Completo 50%
        resultado *=  calcularPlan(plan);
        resultado = parseFloat(resultado).toFixed(2)
        
        // Total
        //Activo el spinnner y oculto los componentes Resultado y resumen
        setCargando(true)
        setResumen({ });

        setTimeout(() => {
            // elimino el spinner
            setCargando(false)
            //paso la info al componente principal
            setResumen({   
                cotizacion: Number(resultado),
                datos
            });


        }, 2000);
    }

    return (

        
        <form 
            onSubmit = { handleSubmit }       
        >
            {error&&<StError><span>Debe llenar todos los campos</span></StError>}
            <StField>
                <StLabel>Marca</StLabel>
                <StSelect
                    name = "marca"
                    value ={ marca }  
                    onChange= { handleChange }             
                >
                   <option value="">--Selecione--</option>
                   <option value="americano">Americano</option>
                   <option value="europeo">Europeo</option>
                   <option value="asiatico">Asiático</option>
                </StSelect>
            </StField> 
            <StField>
                <StLabel>Año</StLabel>
                <StSelect
                    name = "year"
                    value ={ year }
                    onChange= { handleChange } 
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
               </StSelect>
            </StField>

            <StField>
                <StLabel>Plan</StLabel>
                <StInputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange= { handleChange } 
                />Básico
                <StInputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange= { handleChange } 
                />Completo
                
            </StField> 
        
            <StButton type="submit">Cotizar</StButton>

        </form>
        
    )
}

Form.propTypes = {
    setResumen: PropTypes.func.isRequired,
    setCargando: PropTypes.func.isRequired
}

export default Form
