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

  const Button = styled.button`
  --yellow-color: #fcee09; 
  --red-color: #ff003c;
  --black-color: #050a0e;
  --blue-color: #00f0ff;
  --white-color: #fafafa;

  width: 230px;
  height: 60px; 
  border: 0;
  outline: none;
  background-color: var(--black-color);
  cursor: pointer;
  position: relative;
  font-family: Tomorrow, sans-serif;
  font-size: .85rem;
  text-transform: uppercase;
  color: var(--black-color);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
  z-index: 1;
`

const Button_Content = styled.div`
--yellow-color: #fcee09; 
--red-color: #ff003c;
--black-color: #050a0e;
--blue-color: #00f0ff;
--white-color: #fafafa;

display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background-color: var(--yellow-color);
  clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
  z-index: 2;
`
const Button_Label = styled.span`
--yellow-color: #fcee09; 
--red-color: #ff003c;
--black-color: #050a0e;
--blue-color: #00f0ff;
--white-color: #fafafa;

height: 10px;
  font-size: .40rem;
  position: absolute;
  bottom: -4px;
  right: 8%;
  padding: 0 5px;
  background-color: var(--yellow-color);
  z-index: 3;
`

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ClipPathButton>CyberPunk 2077</ClipPathButton>
        <br></br>
        <Button>
          <Button_Content>
            The future is now_
          </Button_Content>
          <Button_Label>r25</Button_Label>
        </Button>
      </header>
    </div>
  );
}

export default App;
