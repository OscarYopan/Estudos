//OBJETOS
/*
- Possuem constantes Mutaveis, assim como arrays
- Para criar um objeto usa-se as '{}'.
- Entre os atributos usa-se necessariamente ','
- Obejtos é um dos corações do JavaScript, juntamente com funções
*/

const pessoa1 = {
  nome: 'Oscar',
  sobrenome: 'Yopan',
  idade: 35,
  nota: 10
}

console.log(pessoa1.nome); // para acessar o atributa coloca-se o '.'
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
console.log(pessoa1.nota);

// FUNCAO PARA CRIAR OBJETOS

function criaPessoa(nome, sobrenome, idade, nota) {
  return{nome, sobrenome, idade, nota}
}

const pessoa2 = criaPessoa('Amanda', 'Yopan', 25, 9);
const pessoa3 = criaPessoa('Juarex', 'Macedo', 87, 5);
const pessoa4 = criaPessoa('Vitor', 'Hugo', 2, 1);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome);

// FUNCAO/METODO dentro de OBJETOS

const pessoa5 = {
  nome: 'Guto',
  sobrenome: 'Cell',
  idade: 31,
  nota: 8,
  contagem: 1,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} está a procura de um novo amor!`);
  },

  contador(){
    this.contagem++;
  }

};

pessoa5.fala()
pessoa5.contador()
console.log(pessoa5.contagem);
pessoa5.fala()
pessoa5.contador()
console.log(pessoa5.contagem);
pessoa5.fala()
pessoa5.contador()
console.log(pessoa5.contagem);
pessoa5.fala()
pessoa5.contador()
console.log(pessoa5.contagem);
pessoa5.fala()
pessoa5.contador()
console.log(pessoa5.contagem);
pessoa5.fala()
pessoa5.contador()
console.log(pessoa5.contagem);
