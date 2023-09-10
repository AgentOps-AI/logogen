import React from 'react';
import './App.css';
import FeedbackButtons from './FeedbackButtons';
import styled, { css, keyframes } from 'styled-components';

const Container = styled.div`
    margin: 20px;
    border: 1px solid;
    background: white;
    border-radius: 15px; /* Rounded corners for card-like appearance */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Deep shadow for depth */
`

const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  ${props => props.disliked && css`
    animation: ${shakeFade} 0.5s linear forwards;
  `}
`;


const shakeFade = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); opacity: 1; }
  10% { transform: translate(-1px, -2px) rotate(-1deg); opacity: 0.9; }
  20% { transform: translate(-3px, 0px) rotate(1deg); opacity: 0.8; }
  30% { transform: translate(3px, 2px) rotate(0deg); opacity: 0.7; }
  40% { transform: translate(1px, -1px) rotate(1deg); opacity: 0.6; }
  50% { transform: translate(-1px, 2px) rotate(-1deg); opacity: 0.5; }
  60% { transform: translate(-3px, 1px) rotate(0deg); opacity: 0.4; }
  70% { transform: translate(3px, 1px) rotate(-1deg); opacity: 0.3; }
  80% { transform: translate(-1px, -1px) rotate(1deg); opacity: 0.2; }
  90% { transform: translate(1px, 2px) rotate(0deg); opacity: 0.1; }
  100% { transform: translate(1px, -2px) rotate(-1deg); opacity: 0; }
`;



export const ComponentViewerDiv = ({ children }) => (
    <div className="Component-viewer">
        <div className="Component-viewer-top-bar">
            <div className="Component-viewer-circle red"></div>
            <div className="Component-viewer-circle yellow"></div>
            <div className="Component-viewer-circle green"></div>
        </div>
        <ComponentContainer>
            {children}
        </ComponentContainer>
    </div>
);

function ComponentViewer({ children, onLike, onDislike }) {
    const [disliked, setDisliked] = React.useState(false);

    const handleDislike = () => {
        setDisliked(true);
        setTimeout(() => {
            setDisliked(false);
            onDislike();
        }, 500); // same duration as the animation
    };

    return (
        <Container>
            <ComponentViewerDiv>
                <ComponentContainer disliked={disliked}>
                    {children}
                </ComponentContainer>
            </ComponentViewerDiv>
            <div className="feedback-buttons">
                <FeedbackButtons onLike={onLike} onDislike={handleDislike} />
            </div>
        </Container>
    );
}


export default ComponentViewer; 