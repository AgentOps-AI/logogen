import React from 'react';
import styled from 'styled-components';

// Define our button with styled-components
const Button = styled.button`
  display: inline-block;
  padding: 0.25em 0.4em;
  margin: 0.5em;
  font-size: 1.25em; // Increased font size for better visibility
  font-weight: 700;
  line-height: 1;
  color: #000; // Changed color to black for better visibility on white background
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  background-color: ${props => props.badgeType === 'options' ? '#ADD8E6' : '#F5F5DC'}; // Changed background color based on badge type
  border: 1px solid #ccc; // Added border
  box-shadow: 0px 0px 5px rgba(0,0,0,0.1); // Added light shadow
  cursor: pointer; // Added cursor pointer to make the tags clickable

  &:not(:last-child) {
    margin-right: .25em;
  } 
  &:hover {
    background-color: ${props => props.badgeType === 'options' ? '#B0E0E6' : '#EEE8AA'}; // Change color on hover
  }
  &:active {
    background-color: ${props => props.badgeType === 'options' ? '#87CEEB' : '#DAA520'}; // Change color on press
    transform: scale(0.95); // Added inpress animation on click
  }
`;

// Button component
const TagButton = ({ tag, badgeType }) => {
  return (
    <Button badgeType={badgeType}>{tag}</Button>
  );
}

export default TagButton;
