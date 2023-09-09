import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #8A7D72; /* Earthy tone */
  color: #F4F1DE; /* Light color for contrast */
  padding: 10px;
  font-size: 1em;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Courier New', Courier, monospace; /* Rustic font */
  border-radius: 4px;
  &:hover {
    background-color: #BFB8A5; /* Lighter earthy tone on hover */
  }
`;

const DropdownContent = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  background-color: #F4F1DE; /* Light background */
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 4px;
`;

const DropdownItem = styled.a`
  color: #8A7D72; /* Earthy tone */
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #BFB8A5; /* Lighter earthy tone on hover */
  }
`;

function StyledDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DropdownContainer>
            <DropdownButton onClick={() => setIsOpen(!isOpen)}>
                Click me
            </DropdownButton>
            <DropdownContent open={isOpen}>
                <DropdownItem href="#">Link 1</DropdownItem>
                <DropdownItem href="#">Link 2</DropdownItem>
                <DropdownItem href="#">Link 3</DropdownItem>
            </DropdownContent>
        </DropdownContainer>
    );
}

export default StyledDropdown;