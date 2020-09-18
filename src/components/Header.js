import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StContainerHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #ffffff;
`;

const StTextHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return (
        <StContainerHeader>
            <StTextHeader>{titulo}</StTextHeader>
        </StContainerHeader>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header
