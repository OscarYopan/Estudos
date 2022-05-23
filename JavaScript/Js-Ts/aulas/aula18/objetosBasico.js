//OBJETOS
/*
- Possuem constantes Mutaveis, assim como arrays
- Para criar um objeto usa-se as '{}'.
- Entre os atributos usa-se necessariamente ','
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
  return{
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
    nota: nota
  }
}

const pessoa2 = criaPessoa('Amanda', 'Yopan', 25, 9);
const pessoa3 = criaPessoa('Juarex', 'Macedo', 87, 5);
const pessoa3 = criaPessoa('Vitor', 'Hugo', 2, 1);

