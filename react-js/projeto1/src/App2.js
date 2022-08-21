import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'O titulo 1',
        body: 'O corpo de texto 1 '
      },
      {
        id: 2,
        title: 'O titulo 2',
        body: 'O corpo de texto 2 '
      },
      {
        id: 3,
        title: 'O titulo 3',
        body: 'O corpo de texto 3'
      },
    ]
  }

  render() {
    const { posts } = this.state

    return (
      <div className='App'>
        <h1>Treino</h1>
      </div>
    );
  }
}

export default App;