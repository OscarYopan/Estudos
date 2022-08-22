import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    posts: []
  };

  //Buscando Dados Externos

  /*
  API's Links:

  https://jsonplaceholder.typicode.com/

  https://jsonplaceholder.typicode.com/posts

  https://jsonplaceholder.typicode.com/photos

  https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API

  */

  componentDidMount () {
    this.loadPosts()
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')

    const [posts] = await Promise.all([postsResponse])

    const postsJson = await posts.json()

    this.setState({posts: postsJson})
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
          </div>
        ))}
      </div>
    );
  }
}

export default App;