//Hooks - Useffect
/*
  - https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/learn/lecture/24955272#overview
  - 'componentDidUpdate' = executa toda vez que o componente executa.
    - recebe como primeiro componente uma função;
  - 'componentDidMount' = execulta uma vez
    - necessita passar um segundo parametro, um array com dependencias.
    - caso passe um array vazio, executa somente uma vez
    - cuidar para limpar as execuções automaticas para evitar erros em remontagens
  - com dependencia = executa toda vez que a dependencia muda.
*/

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  //componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  //componentDidMount
  useEffect(() => {
    console.log('componentDidMount');
    document.querySelector('h1')?.addEventListener('click', eventFn);

    //componentWillEmout = limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  //com dependencia
  useEffect(() => {
    console.log('contador mudou para:', counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

const eventFn = () => {
  console.log('H1 clicado');
};

export default App;
