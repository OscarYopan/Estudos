import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
    setCounter(counter + 1);
  };

  // const handleIncrement = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h2>Contador : {counter}</h2>

        <button onClick={handleClick} type="button">
          Reverter
        </button>
      </header>
    </div>
  );
}

export default App;
