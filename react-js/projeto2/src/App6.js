//Hooks - UseContext
/*
  - Serve para repassar propriedades para um componente abaixo da arvore de componentes e subcomponentes;
  - Para isso usam-se estadps Globais;
  * https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/learn/lecture/24971438?start=15#content
  * https://pt-br.reactjs.org/docs/hooks-reference.html#usecontext
*/
import React from 'react';
import './App.css';

// eslint-disable-next-line
const globalState = {
  title: 'Titulo do Contexto',
  counter: 0,
};

// eslint-disable-next-line
const globalContext = React.createContext();

// eslint-disable-next-line
const Div = ({ children }) => {
  return <div className="App">{children}</div>;
};

function App() {
  return (
    <div className="App">
      <h1>Oi</h1>
    </div>
  );
}

export default App;
