import { AppContext } from './contexts/AppContext';
import './App.css';
import { Div } from './components/div';

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;
