//Hooks - UseContext
/*
  - Serve para repassar propriedades para um componente abaixo da arvore de componentes e subcomponentes;
  - Para isso usam-se estadps Globais;
  * https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/learn/lecture/24971438?start=15#content
  * https://pt-br.reactjs.org/docs/hooks-reference.html#usecontext
*/
import React from 'react';
import { useContext } from 'react';
import './App.css';

// eslint-disable-next-line
const globalState = {
  title: 'Titulo do Contexto',
  text: 'Esse é um texto apenas com a intenção de treinar um hook durante meu estudo de React JS. Espero que eu consiga entender tudo muito bem, para poder pratica-lo bem no futuro e garantir uma boa colocação no mercado de trabalho.',
  counter: 0,
};

// eslint-disable-next-line
const globalContext = React.createContext();

// eslint-disable-next-line
const Div = ({ children }) => {
  return (<H1 />), (<Text />);
};

// eslint-disable-next-line
const H1 = ({ children }) => {
  const theContext = useContext(globalContext);
  return <h1>{theContext.title}</h1>;
};

// eslint-disable-next-line
const Text = ({ children }) => {
  const theContext = useContext(globalContext);
  return <p>{theContext.text}</p>;
};

function App() {
  return (
    <globalContext.Provider value={globalState}>
      <Div />
    </globalContext.Provider>
  );
}

export default App;
