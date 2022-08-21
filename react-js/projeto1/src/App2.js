import './App.css';
import { Component } from 'react';


//State com Arrays e Objetos
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
        {posts.map(post => (
          <div key={post.id}>
            <h1 >{post.title}</h1>
            <p>{post.body}</p>
            <p>{post.body}</p>
            <p>{post.body}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;