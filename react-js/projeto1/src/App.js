import logo from './logo.svg';
import './App.css';


// Componente de Função
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

export default App; // exporta a função e não o arquivo inteiro
