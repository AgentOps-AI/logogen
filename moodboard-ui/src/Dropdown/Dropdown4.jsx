import React, { useState } from 'react';
import styled from 'styled-components';

// Tags representing the general themes of this component
export const tags = ['Dropdown', 'Styled Components', 'Interactive', 'Arial Font', 'Box Shadow', 'Hover State'];

const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
  font-family: Arial, sans-serif; /* Simple, clean font */
`;

const DropdownHeader = styled.div`
  padding: 10px;
  background-color: #fff; /* White background */
  color: #333; /* Dark text for contrast */
  border: 1px solid #ddd; /* Light border */
  cursor: pointer;
  transition: 0.3s all ease; /* Smooth transition for hover state */
  
  &:hover {
    color: #fff; /* White text on hover */
    background-color: #333; /* Dark background on hover */
  }
`;

const DropdownListContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: #fff; /* White background */
  border: 1px solid #ddd; /* Light border */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const DropdownList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const ListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: 0.3s all ease; /* Smooth transition for hover state */
  
  &:hover {
    background-color: #ddd; /* Light background on hover */
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

export default StyledDropdown;