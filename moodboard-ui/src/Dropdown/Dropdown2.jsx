import React, { useState } from 'react';
import styled from 'styled-components';

// Tags representing the general themes of this component
export const tags = ['Dropdown', 'Styled Components', 'Interactive', 'Monospace Font', 'Box Shadow'];

const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
`;

const DropdownHeader = styled.div`
  padding: 10px;
  background-color: #555;
  color: #fff;
  border: 1px solid #333;
  cursor: pointer;
  font-family: 'Courier New', Courier, monospace;
`;

const DropdownListContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: #fff;
  border: 1px solid #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
`;

const DropdownList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const ListItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

function StyledDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Option 1', 'Option 2', 'Option 3']; // Dummy data

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggling}>
        {selectedOption || "Select an Option"}
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
          <DropdownList>
            {options.map(option => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropdownList>
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
}

export const Dropdown2 = StyledDropdown;