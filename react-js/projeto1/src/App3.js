import './App.css';
import { Component } from 'react';

class App extends Component {

  //State com Arrays e Objetos
  
  state = {
    counter: 0,
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
  

  //Lifecicle methods

  componentDidMount () {
    this.handleTimeout()
  }

  componentDidUpdate () {
    
  }
  
  handleTimeout = () => {
    const { posts, counter } = this.state
    posts[0].title = 'Novo Titulo'

    setTimeout(() => {
      this.setState({ posts, counter: counter +1 })
    }, 5000)
  }

  render() {
    const { posts, counter } = this.state

    return (
      <div className='App'>   
        <p>{counter}</p>     
        {posts.map(post => (          
          <div key={post.id}>
            <h1 >{post.title}</h1>
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