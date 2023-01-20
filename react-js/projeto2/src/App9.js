import './App.css';

export const globalState = {
  title: 'O Título',
  body: 'O body do contexto, que com certeza deve conter um texto consideravelmente maior que o próprio titulo, se não não faz sentido, até porque a cabeça sempre é menor ue o corpo. O body do contexto, que com certeza deve conter um texto consideravelmente maior que o próprio titulo, se não não faz sentido, até porque a cabeça sempre é menor ue o corpo.O body do contexto, que com certeza deve conter um texto consideravelmente maior que o próprio titulo, se não não faz sentido, até porque a cabeça sempre é menor ue o corpo.',
  counter: 0,
};

function App() {
  return (
    <div className="App">
      <h1>Olá</h1>
    </div>
  );
}

export default App;
