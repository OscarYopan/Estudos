// ********************** Criando meu Proprio Hook **************************

import { useEffect } from 'react';
import { useState } from 'react';

const useMyHook = (cb) => {
  useEffect(() => {
    const interval = setInterval(() => {
      cb();
    }, 2000);

    return () => clearInterval(interval);
  }, [cb]);
};

// App.jsx
function App() {
  const [counter, setCounter] = useState(0);

  useMyHook(() => setCounter((c) => c + 1));

  return (
    <div>
      <h1>Contador: {counter}</h1>
    </div>
  );
}

export default App;
