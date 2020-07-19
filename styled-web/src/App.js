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

const GlitchyButton = styled.button`
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

:hover .btn__glitch,
:hover .btn__content::after,
:focus .btn__glitch,
:focus .btn__content::after  {
  display: block;
  animation: glitch-animation 2s linear 0s infinite;
}

@keyframes glitch-animation {
  0% {
    opacity: 1;
    transform: translateZ(0);
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
  }

  2% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(-5px);
  }

  6% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(5px);
  }

  8% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(-5px);
  }

  9% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(0);
  }

  10% {
    clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
    transform: translate3d(5px, 0, 0);
  }

  13% {
    clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
    transform: translateZ(0);
  }

  13.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    transform: translate3d(5px, 0, 0);
  }

  15% {
    clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
    transform: translate3d(5px, 0, 0);
  }

  20% {
    clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
    transform: translate3d(-5px, 0, 0);
  }

  20.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    transform: translate3d(5px, 0, 0);
  }

  25% {
    clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
    transform: translate3d(5px, 0, 0);
  }

  30% {
    clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
    transform: translate3d(-5px, 0, 0);
  }

  30.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }

  35% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(-5px);
  }

  40% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(5px);
  }

  45% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(-5px);
  }

  50% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(0);
  }

  55% {
    clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
    transform: translate3d(5px, 0, 0);
  }

  60% {
    clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
    transform: translateZ(0);
    opacity: 1;
  }

  60.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    opacity: 1;
  }

  to {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    opacity: 1;
  }
}

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

const Button_Glitch = styled.span`
--yellow-color: #fcee09; 
--red-color: #ff003c;
--black-color: #050a0e;
--blue-color: #00f0ff;
--white-color: #fafafa;

display: none;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: var(--yellow-color);
filter: drop-shadow(-2px 3px #67e3f3) drop-shadow(-1px -3px #02d8f3) drop-shadow(2px 1px #02d8f3);
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
        <br></br>
        <GlitchyButton>
          <Button_Content className="btn__content">
            The future is now_
          </Button_Content>
          <Button_Glitch className="btn__glitch"></Button_Glitch>
          <Button_Label>r25</Button_Label>
        </GlitchyButton>
      </header>
    </div>
  );
}

export default App;
