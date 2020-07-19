import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

function App() {

  const ClipPathButton = styled.button`
  width: 230px;
  height: 60px; 
  border: 0;
  outline: none;
  background-color: #fcee09;
  cursor: pointer;
  position: relative;
  font-family: Tomorrow, sans-serif;
  font-size: .85rem;
  text-transform: uppercase;
  color: #050a0e;
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
`

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ClipPathButton>CyberPunk 2077</ClipPathButton>
      </header>
    </div>
  );
}

export default App;
