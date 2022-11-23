import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//import { Component } from 'react';

function App() {
  //const { reverse } = this.state;
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <button onClick={handleClick} type="button">
          Reverter
        </button>
      </header>
    </div>
  );
}

/*
class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick.bind(this);

    this.state = {
      reverse: false,
    };
  }

  handleClick = () => {
    const { reverse } = this.state;
    this.setState({ reverse: !reverse });
  };

  render() {
    const { reverse } = this.state;
    const reverseClass = reverse ? 'reverse' : '';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
          <button onClick={this.handleClick} type="button">
            Reverter
          </button>
        </header>
      </div>
    );
  }
}

*/

export default App;
