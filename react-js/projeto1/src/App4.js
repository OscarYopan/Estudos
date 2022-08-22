import './App.css';
import { Component } from 'react';

class App extends Component {

  //State com Arrays e Objetos
  
  state = {
    counter: 0,
    posts: []
  } 

  //Lifecicle methods

  /*
  https://pt-br.reactjs.org/docs/react-component.html

  https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

  https://www.w3schools.com/react/react_lifecycle.asp
  */

  componentDidMount () { //monta o componente
    
  }

  componentDidUpdate () { //atualiza o componente    
    
  }

  componentWillUnmount () { //desmonta o componente
    
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