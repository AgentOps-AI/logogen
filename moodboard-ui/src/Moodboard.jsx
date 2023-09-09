import React from 'react';
import styled from 'styled-components';

const MoodboardContainer = styled.div`
  width: auto;
  min-width: 800px;
  min-height: 325px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  font-size: calc(10px + 2vmin);
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;
  padding-bottom: 50px;
  border: solid 1px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Deep shadow for depth */
`;

function Moodboard({ children }) {
    return (
        <MoodboardContainer>
            {children}
        </MoodboardContainer>
    );
}

export default Moodboard;