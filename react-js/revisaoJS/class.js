//Class
/*
  - É a mesma coisa ue funções construtoras;
  - Por padrão o nome é definido com letra maiuscula;
  - Para passar parametros para a classe, usa-se o metodo 'constructor';
*/

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome; //parametro
    this.sobrenome = sobrenome; //parametrp
  }

  falar(/*paramentro se necessario*/) { //metodo
    console.log(`${this.nome} está falando!`);
  }

  comer() { //metodo
    console.log(`${this.nome} está comendo pizza!`);
  }

  beber() { // metodo
    console.log(`${this.nome} está bebendo caldo de cana!`);
  }
}

const pessoa1 = new Pessoa('Oscar', 'Yopan')
const pessoa2 = new Pessoa('Amanda', 'Yopan')
const pessoa3 = new Pessoa('Luiz', 'Yopan')
const pessoa4 = new Pessoa('Felipe', 'Yopan')
const pessoa5 = new Pessoa('Josoe', 'Yopan')

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
console.log(pessoa5);

