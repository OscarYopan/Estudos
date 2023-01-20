import { Children } from 'react';
import { createContext } from 'react';
import './App.css';
import P from 'prop-types';
import { useReducer } from 'react';

// data.js
export const globalState = {
  title: 'O Título',
  body: 'O body do contexto, que com certeza deve conter um texto consideravelmente maior que o próprio titulo, se não não faz sentido, até porque a cabeça sempre é menor ue o corpo. O body do contexto, que com certeza deve conter um texto consideravelmente maior que o próprio titulo, se não não faz sentido, até porque a cabeça sempre é menor ue o corpo.O body do contexto, que com certeza deve conter um texto consideravelmente maior que o próprio titulo, se não não faz sentido, até porque a cabeça sempre é menor ue o corpo.',
  counter: 0,
};

//AppContext.jsx
export const context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  return <context.Provider value={{ state }}>{Children}</context.Provider>;
};

AppContext.prototypes = {
  children: P.node,
};

//reducer.js
export const reducer = (state, action) => {
  return { ...state };
};
//App.jsx
function App() {
  return (
    <AppContext>
      <div className="App">
        <h1>Olá</h1>
      </div>
    </AppContext>
  );
}

export default App;
