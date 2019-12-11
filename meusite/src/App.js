import React from 'react';
import logo from './logo.svg';
import './App.css';

const Equipe = (props) => {
  return (
  <div>
    <Sobre nome = {props.nome} cargo = {props.cargo} idade = {props.idade}/>
    <Social facebook = {props.facebook}/>
    <hr/>
  </div>
  )
}

const Sobre = (props) => {
  return(

    <div>
    
    <h2>Olá, sou o {props.nome}</h2>
    <h3>Cargo: {props.cargo}</h3>
    <h3>Idade: {props.idade} anos </h3>

    </div>
  )
}

const Social = (props) => {
  return(
    <div>
      <a href="https://google.com">Facebook </a>
      <a>LinkeDin </a>
      <a>Youtube </a>
    </div>
  );
}

// App é o componente principal
function App() {
  return (
    <div className="App">
      
        <div>
          <h1>Conheça Nossa Equipe</h1>
          <Equipe nome="Leandro" cargo="Programador" idade="32"
          facebook="https://google.com"/>

          <Equipe nome="maria" cargo="Design" idade="24"
          facebook="https://google.com"/>

          <Equipe nome="Pedro" cargo="Front" idade="19"
          facebook="https://google.com"/>
        </div>
       
      
    </div>
  );
}

export default App;
