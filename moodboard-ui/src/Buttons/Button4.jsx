import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const pressDown = keyframes`
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
`;

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-size: 1.2em;
  font-family: 'Times New Roman', Times, serif; /* Classic serif font */
  color: #5C4742; /* Muted color */
  background-color: #F4D8CD; /* Muted background color */
  border: 1px solid #5C4742; /* Muted border color */
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  position: relative;
  top: 0;

  &:hover {
    background-color: #E9C9A4; /* Lighter color on hover */
  }

  &:active {
    animation: 0.2s ${pressDown} ease-in-out;
    top: 2px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }
`;

function Button4() {
    return <StyledButton>Click me</StyledButton>;
}

export default Button4; 