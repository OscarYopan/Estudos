const pessoa = {
  nome: 'Oscar',
  sobrenome: 'Yopan',
  idade: 35,
  endereco: {
    rua: 'Nicolau Garcia',
    numero: 130,
    cidade: 'São José',
    estado: 'Santa Catarina',
    cep: 88104-460
  }
}

//--//--//--//--//--//
// Atribuição normal:

const snome = pessoa.sobrenome 

console.log(pessoa.nome);
console.log(snome);

//--//--//--//--//--//
// Atribuição via desestruturação:

const { nome, sobrenome, endereco: {rua, numero}, ...resto } = pessoa

console.log(nome, sobrenome);
console.log(rua, numero);
console.log(resto);
