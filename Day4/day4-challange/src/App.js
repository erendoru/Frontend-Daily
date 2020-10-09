import React, { useState } from 'react';
import './App.css';
import Button from './Button'

function App() {
  const [modal, setModal] = useState(false)

  const openModal = () => setModal(current => !current);

  return (
    <div className="App">
      <Button openModal={openModal} modal={modal}>Settings</Button>
    </div>
  );
}

export default App;
