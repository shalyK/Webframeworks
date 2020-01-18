import React, { useState } from 'react';
import Logo from './Logo';
import './App.css';
import { CirclePicker } from 'react-color';

function App() {
  const [color,setColor] = useState('#000000')
  const handleChange = (color) => {
    setColor(color.hex)
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Logo color = {color} />
        <CirclePicker onChange={handleChange}/>
      </header>
    </div>
  );
}

export default App;
