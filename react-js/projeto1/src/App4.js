import './App4.css';
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
    // Tradução - Fetch -> Buscar
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')

    const [posts, photos] = await Promise.all([postsResponse, photosResponse])

    const postsJson = await posts.json()
    const photosJson = await photos.json()

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    })

    this.setState({posts: postsAndPhotos})
  }

  render() {
    const { posts } = this.state

    return (
      <section className='container'>
        <div className='posts'>   
          {posts.map(post => (
            <div className='post'>
              <img src={post.cover} alt={post.title}/>
              <div key={post.id} className='post-content'>
                <h1 >{post.title}</h1>
                <p>{post.body}</p>
               <p>{post.body}</p>
                <p>{post.body}</p>
              </div>
            </div>      
          ))}
        </div>
      </section>
    );
  }
}

export default App;