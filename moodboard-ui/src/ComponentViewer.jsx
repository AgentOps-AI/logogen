import React from 'react';
import './App.css';
import FeedbackButtons from './FeedbackButtons';
import styled from 'styled-components'


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
    flex-grow: 1; /* New style */
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

function ComponentViewer({ children }) {
    return (
        <Container>
            <ComponentViewerDiv>
                {children}
            </ComponentViewerDiv>
            <div className="feedback-buttons">
                <FeedbackButtons />
            </div>
        </Container>
    );
}

export default ComponentViewer;