
import React, {Component} from 'react';

// Criação do Componente por Class
class Equipe extends Component{
  render(){
    return(
      <h2>Funcionou</h2>
    );
  }
}

  function App() {
    return(
      <div>
        <h1>Conheça nossa Equipe</h1>
        <Equipe/>
      </div>
    )
  }

  export default App;