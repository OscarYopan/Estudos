import { Component } from 'react';
import './styles.css';

export class Home extends Component {
  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState(
      (prevState, prevProps) => { // funcao de primeiro parametro
        return { counter: prevState.counter + 1 }
      }, 
      () => {
        console.log('Post', this.state.counter); //essa função de segundo parametro é chamadad de 'callback'
      });
  }

  render () {
    return(
      <div className='container'>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}