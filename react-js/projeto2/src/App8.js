import './App.css';

export const globalState = {
  title: 'O título que contexto',
  body: 'O body do contexto',
  counter: 0,
};

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
