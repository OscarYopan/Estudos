//Hooks - UseMemo>
/*
  - Mesma função de 'UseCallBack';
  - Nesse caso ele salva valores;
  *https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/learn/lecture/24960210?start=15#overview
*/

import P from 'prop-types';
import { useCallback, useState } from 'react';
import './App.css';
import React from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho');
  return <button onClick={() => incrementButton(1)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  //UseCallBack - Formato:
  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai');

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
