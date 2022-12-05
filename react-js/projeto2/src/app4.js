//Hooks - UseMemo>
/*
  - Mesma função de 'UseCallBack';
  - Nesse caso ele salva valores;
  - Recebe uma função;
  - Recebe um array com dependencias;
  *https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/learn/lecture/24960210?start=15#overview
*/
import { useEffect } from 'react';
import './App.css';

function App() {
  console.log('Pai foi Renderizado!');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts');
  });

  return (
    <div className="App">
      <h1>Oi</h1>
    </div>
  );
}

export default App;

// import P from 'prop-types';
// import { useCallback, useMemo, useState } from 'react';
// import './App.css';
// import React from 'react';

// const Button = ({ incrementButton }) => {
//   console.log('Filho');
//   return <button onClick={() => incrementButton(1)}>+</button>;
// };

// Button.propTypes = {
//   incrementButton: P.func,
// };

// function App() {
//   const [counter, setCounter] = useState(0);

//   //UseCallBack - Formato:
//   const incrementCounter = useCallback((num) => {
//     setCounter((c) => c + num);
//   }, []);

//   console.log('Pai');

//   const btn = useMemo(() => {
//     return <Button incrementButton={incrementCounter} />;
//   }, [incrementCounter]);

//   return (
//     <div className="App">
//       <h1>Contador: {counter}</h1>
//       {btn}
//     </div>
//   );
// }
