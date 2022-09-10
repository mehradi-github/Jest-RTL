import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const [color, setColor] = useState('red');
const newColor= color==='red'? 'blue':'red';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button style={{backgroundColor: color}} onClick={()=>setColor(newColor)}>Change to {newColor}</button>
    </div>
  );
}

export default App;
