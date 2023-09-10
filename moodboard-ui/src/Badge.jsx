import React from 'react';
import styled from 'styled-components';

// Define our badge with styled-components
const Badge = styled.span`
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
  background-color: #F5F5DC; // Changed background color to lighter beige
  border: 1px solid #ccc; // Added border
  box-shadow: 0px 0px 5px rgba(0,0,0,0.1); // Added light shadow

  &:not(:last-child) {
    margin-right: .25em;
  } 
`;

// Badge component
const TagBadge = ({ tag }) => {
    return (
        <Badge>{tag}</Badge>
    );
}

export default TagBadge;


