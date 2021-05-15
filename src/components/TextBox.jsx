import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 2rem;
    background: black;
    color: white;
    width: 100%;
    height: var(--text-box);
    z-index: 5000;
    white-space: pre-wrap;
`;

const TextBox = ({ children }) => {
    return <StyledDiv>{children}</StyledDiv>;
};

export default TextBox;
