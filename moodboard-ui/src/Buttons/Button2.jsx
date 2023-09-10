import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-size: 1em;
  color: #333;
  background-color: #fff;
  border: 2px solid #333;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
  animation: 1s ${fadeIn} ease-out;

  &:hover {
    background-color: #333;
    color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  &:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    transform: scale(0.98);
  }
`;

function Button2() {
    return <StyledButton>Click me</StyledButton>;
}

// Define the general themes of this component
const tags = ["Fade In", "Box Shadow", "Hover Effect", "Active Effect", "Transition", "Cursor Pointer"];

export { Button2, tags };
