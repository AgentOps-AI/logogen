import React from 'react';
import './App.css';
import ComponentViewer from './ComponentViewer';


function App() {
  return (
    <div className="App" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      placeItems: 'center'
    }}>
      <ComponentViewer />
      <ComponentViewer>
        <div>hello</div>
      </ComponentViewer>
      <ComponentViewer />
      <ComponentViewer />
    </div>
  );
}

export default App;