// COMPONENTES DE CLASSE COM ESTADO

import { Component } from 'react'

class NomeAppClasse extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name : 'Oscar'
    }
  }

  render() {
    const { name } = this.state;
  
    return (
      <p>Meu Nome é ${name}</p>
    )
  }
}

export NomeAppClasse