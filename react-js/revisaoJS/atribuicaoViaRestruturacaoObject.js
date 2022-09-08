const pessoa = {
  nome: 'Oscar',
  sobrenome: 'Yopan',
  idade: 35,
  endereço: {
    rua: 'Nicolau Garcia',
    numero: 130,
    cidade: 'São José',
    estado: 'Santa Catarina',
    cep: 88104-460
  }
}

//--//--//--//--//--//
// Atribuição normal:

const sobrenome = pessoa.sobrenome 

console.log(pessoa.nome);
console.log(sobrenome);

//--//--//--//--//--//
// Atribuição via desestruturação:

const { idade } = pessoa

console.log(idade);
