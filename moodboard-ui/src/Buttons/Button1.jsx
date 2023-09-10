import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
  background-color: ${props => props.theme.background};
  font-family: 'Courier New', Courier, monospace;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${props => props.theme.hover};
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: white;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-2px);
  }
`;

// Define what props.theme will look like
const theme = {
  main: 'mediumseagreen',
  background: 'white',
  hover: 'darkgreen'
};

const Button1 = () => {
  return (
    <Button theme={theme}>Bohemian Button</Button>
  );
}

export default Button1;

