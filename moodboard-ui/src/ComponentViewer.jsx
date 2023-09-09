import React from 'react';
import './App.css';

function ComponentViewer({ children }) {
    return (
        <header className="Component-viewer">
            <div className="Component-viewer-top-bar">
                <div className="Component-viewer-circle red"></div>
                <div className="Component-viewer-circle yellow"></div>
                <div className="Component-viewer-circle green"></div>
            </div>
            {children}
        </header>
    );
}

export default ComponentViewer; 