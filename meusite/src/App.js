import React from 'react';
import logo from './logo.svg';
import './App.css';

const Bemvindo = (props) =>{
  return(

    <div>
  <h2>Bem Vindo {props.nome}</h2>
  <h3>Tenho {props.idade} de idade</h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Bemvindo nome="Leandro" idade="32"/>
        <Bemvindo nome= "maria" idade="23"/>>
       
      </header>
    </div>
  );
}

export default App;
