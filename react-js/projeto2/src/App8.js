import { useReducer } from 'react';
import './App.css';

export const globalState = {
  title: 'O Título',
  body: 'O body do contexto, que com certeza deve conter um texto consideravelmente maior que o próprio titulo, se não não faz sentido, até porque a cabeça sempre é menor ue o corpo. O body do contexto, que com certeza deve conter um texto consideravelmente maior que o próprio titulo, se não não faz sentido, até porque a cabeça sempre é menor ue o corpo.O body do contexto, que com certeza deve conter um texto consideravelmente maior que o próprio titulo, se não não faz sentido, até porque a cabeça sempre é menor ue o corpo.',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      return { ...state, title: 'O Titulo Mudou' };
    }

    case 'contar': {
      const { counter } = state;
      return { ...state, counter: counter + 1 };
    }
  }

  return { ...state };
};

function App() {
  return (
    <div className="App">
      <h1>Olá</h1>
    </div>
  );
}

export default App;
