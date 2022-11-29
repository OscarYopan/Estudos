//Hooks - UseCallBack
/*
  -
*/
import P from 'prop-types';
import { useState } from 'react';
import './App.css';

button.prototypes = {
  incrementButton: P.func,
};

const button = (incrementButton) => {
  return <button onClick={() => incrementButton(10)}>+</button>;
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
}

export default App;
