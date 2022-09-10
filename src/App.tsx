import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const [color, setColor] = useState('red');
const newColor= color==='red'? 'blue':'red';
const [dis,setDis]=useState(false);
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
      <button style={{backgroundColor: color}}
       onClick={()=>setColor(newColor)}
       disabled={dis}
       >Change to {newColor}</button>

      <input type={'checkbox'}
      id="ch-dis"
      defaultChecked={dis}
      aria-checked={dis}
      onChange={(e)=>{setDis(e.target.checked)}}
      />
      <label htmlFor='ch-dis'>Disable button</label>
    </div>
  );
}
export const replaceCamleWithSpaces=(str:string)=>{
  return str.replace(/\B([A-Z])\B/g,' $1');
}
export default App;
