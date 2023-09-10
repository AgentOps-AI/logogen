import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const pressDown = keyframes`
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-size: 1.2em;
  font-family: 'Courier New', Courier, monospace; /* Retro monospace font */
  color: #fff;
  background-color: #ff33cc; /* Bright retro color */
  border: none;
  border-radius: 5px;
  box-shadow: 0 5px #990099; /* 3D effect */
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  position: relative;
  top: 0;

  &:hover {
    background-color: #ff66ff; /* Lighter color on hover */
  }

  &:active {
    animation: 0.2s ${pressDown} ease-in-out;
    top: 5px;
    box-shadow: 0 1px #990099;
  }
`;

function Button3() {
  return <StyledButton>Click me</StyledButton>;
}

// Define the general themes of this component
const tags = ["Retro", "Bright Color", "3D Effect", "Hover Effect", "Active Effect", "Transition", "Cursor Pointer"];

export { Button3, tags };
