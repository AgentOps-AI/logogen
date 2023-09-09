import React from 'react';
import './App.css';
import ComponentViewer from './ComponentViewer';
import Moodboard from './Moodboard'; // Import the Moodboard component

function App() {
  return (
    <div className="App" style={{
      display: 'flex', // Use Flexbox
      height: '100vh',
    }}>
      <ComponentViewer style={{ flex: 1 }}>hello</ComponentViewer> {/* Takes up 1/3 of the screen */}
      <Moodboard style={{ flex: 2 }} /> {/* Takes up 2/3 of the screen */}
    </div>
  );
}

export default App; 