import './App4.css';
import { Component } from 'react';
import { PostCard } from './components/Postcard';

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
    this.setState({posts: postsAndPhotos})
  }

  render() {
    const { posts } = this.state

    return (
      <section className='container'>
        <div className='posts'>   
          {posts.map(post => (
            <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
            cover={post.cover}
            />      
          ))}
        </div>
      </section>
    );
  }
}

export default App;