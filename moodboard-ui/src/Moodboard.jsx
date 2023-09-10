import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ComponentViewerDiv } from './ComponentViewer';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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
  overflow: auto; /* Updated from 'hidden' to 'auto' to allow scrolling */
  position: relative;
  padding-bottom: 50px;
  border: solid 1px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Deep shadow for depth */
`;

const AnimatedChild = styled.div`
  animation: 1s ${fadeIn} ease-out;
`;

function Moodboard({ children }) {
    return (
        <MoodboardContainer>
            {React.Children.map(children, child => <AnimatedChild>
                <ComponentViewerDiv>{child}</ComponentViewerDiv>
            </AnimatedChild>)}
        </MoodboardContainer>
    );
}

export default Moodboard;