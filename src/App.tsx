import React from 'react';
import './App.css';
import { SavedImageSidebar } from './components/SavedImageSidebar/SavedImageSidebar';

function App() {
  return (
    <div className="App">
      <SavedImageSidebar savedImages={[]} />
    </div>
  );
}

export default App;
