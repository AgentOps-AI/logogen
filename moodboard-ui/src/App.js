import React from 'react';
import './App.css';
import ComponentViewer, { ComponentViewerDiv } from './ComponentViewer';
import Moodboard from './Moodboard'; // Import the Moodboard component
import BohemianStyledButton from './Buttons/StyledButton';
import Button2 from './Buttons/Button2';
import Button3 from './Buttons/Button3';
import Button4 from './Buttons/Button4';
import Dropdown1 from './Dropdown/Dropdown1'
import Dropdown2 from './Dropdown/Dropdown2'
import Dropdown4 from './Dropdown/Dropdown4'

function App() {
  return (
    <div className="App" style={{
      display: 'flex', // Use Flexbox
      height: '100vh',
    }}>
      <ComponentViewer style={{ flex: 1 }}>
        <BohemianStyledButton />
      </ComponentViewer> {/* Takes up 1/3 of the screen */}
      <Moodboard style={{ flex: 2 }} >
        <ComponentViewerDiv><Dropdown1 /> </ComponentViewerDiv>
        <ComponentViewerDiv><Dropdown2 /> </ComponentViewerDiv>
        <ComponentViewerDiv><Dropdown4 /> </ComponentViewerDiv>
        <ComponentViewerDiv><BohemianStyledButton /> </ComponentViewerDiv>
        <ComponentViewerDiv><Button2 /> </ComponentViewerDiv>
        <ComponentViewerDiv><Button3 /> </ComponentViewerDiv>
        <ComponentViewerDiv><Button4 /> </ComponentViewerDiv>
      </Moodboard> {/* Takes up 2/3 of the screen */}
    </div>
  );
}

export default App; 