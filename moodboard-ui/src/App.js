// App.js
import React from 'react';
import './App.css';
import ComponentViewer from './ComponentViewer';
import Moodboard from './Moodboard';
import useStore from './store';

function App() {
  const components = useStore(state => state.components);
  const addComponent = useStore(state => state.addComponent);
  const dequeueComponent = useStore(state => state.dequeueComponent);
  const queue = useStore(state => state.queue);

  const handleLike = () => {
    if (queue.length > 0) {
      addComponent(queue[0]);
      addLikedTag(queue[0].tags);
      dequeueComponent();
    }
  };

  const handleDislike = () => {
    if (queue.length > 0) {
      dequeueComponent();
    }
  };

  const [likedTags, setLikedTags] = React.useState([]);

  const addLikedTag = (tags) => {
    setLikedTags([...likedTags, ...tags]);
  };

  const CurrentComponent = queue.length > 0 ? queue[0].component : null;
  const CurrentTags = queue.length > 0 ? queue[0].tags : [];

  return (
    <div className="App" style={{
      display: 'flex',
      height: '100vh',
    }}>
      <ComponentViewer onLike={handleLike} onDislike={handleDislike} tags={CurrentTags} likedTags={likedTags} style={{ flex: 1 }}>         {CurrentComponent ? React.createElement(CurrentComponent) : null}
      </ComponentViewer>
      <Moodboard style={{ flex: 2 }}>
        {components.map((Component, index) => (
          React.createElement(Component.component, { key: index })
        ))}
      </Moodboard>
    </div>
  );
}

export default App; 