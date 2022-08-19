import logo from './logo.svg';
import './App.css';

//------------ Componente de Classe ('Stateless')
import { Component } from 'react';

class App extends Component {
  /*
  constructor(props) { //Em React sempre que chamar o 'constructor' usar o 'props'
    super(props);
    this.titleClick = this.titleClick.bind(this) //$$
    this.state = {
      name: 'Oscar',
      lastName: 'Yopan',
      age: 35,
      city: 'Florianópolis',
      counter: 0
    }  
  }
  */

  state = { //Constructor de forma reduzida
  name: 'Oscar',
  lastName: 'Yopan',
  age: 35,
  city: 'Florianópolis',
  counter: 0
  }

  //Mudando o Estado usando o Bind ver linha marcada com '$$'
  /*
  titleClick() {
    this.setState({ name: 'Oscar Luis'})
  }
  */


  //Mudando o Estado Usando Arrow Function
  titleClick = () => {
    this.setState({ name: 'Oscar Luis'})
  }

  contClick = () => {
    const { counter } = this.state
    this.setState({ counter: counter +1 })
  }

  render () { //Esse componente 'render()' tem o mesmo papel da função 'App()' abaixo
    //const name = this.state.name;
    const { name, counter } = this.state //é o mesmo que na linha acima
    //const lastName = this.state.lastName
    const { lastName } = this.state //é o mesmo que na linha acima

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 onClick={this.titleClick}>React</h1>
          <p onClick={() => {console.log('Paragrafo clicado')}}>
            Eu {name} {lastName} estou começando a aprendear React JS
          </p>
          <h3 onClick={this.contClick}>Contador {counter}</h3>
          <a
            className="App-link"
            href="https://github.com/OscarYopan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Perfil
          </a>
        </header>
      </div>
    );
  }
}


//------------ Componente de Função ('Stateless') ---- **** Padrao ****
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estou começando a aprendear React JS
        </p>
        <a
          className="App-link"
          href="https://github.com/OscarYopan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oscar Yopan Github Perfil
        </a>
      </header>
    </div>
  );
}
*/

export default App; // exporta a função e não o arquivo inteiro
