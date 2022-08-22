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
  
  timeoutUpdate = null

  //Lifecicle methods

  /*
  https://pt-br.reactjs.org/docs/react-component.html

  https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

  https://www.w3schools.com/react/react_lifecycle.asp
  */

  componentDidMount () { //monta o componente
    this.handleTimeout()
  }

  componentDidUpdate () { //atualiza o componente    
    this.handleTimeout()
  }

  componentWillUnmount () { //desmonta o componente
    clearTimeout(this.timeouUpdate)
  }
  
  handleTimeout = () => { //Funcao que determina uma ação do componente
    const { posts, counter } = this.state
    posts[0].title = 'Novo Titulo'

    this.timeouUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter +1 })
    }, 1000)
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