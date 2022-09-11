//Map:
/*
  - Altera o valor do array;
  - Pode ser usada junto com 'filter' e 'reduce'
  - Sempre vai retornar um array com valores alterados
  - os dados retornados para a função são: 'objeto' 'indice' e 'array'.
  - return um valor modificado
*/

//      Indice   0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 18, 22, 27]

//Dobre os numeros
const numerosEmDobro = numeros.map((valor) => valor * 2)

console.log(numerosEmDobro);


//---//---//---//---//


const pessoas = [
  { nome: 'Oscar', idade: 35 },
  { nome: 'Amanda', idade: 25},
  { nome: 'Guto', idade: 32},
  { nome: 'Felipe', idade: 30},
  { nome: 'Marina', idade: 28},
  { nome: 'Cris', idade: 30}
]

//Para cada elemento:
//retorne uma string com o nome da pessoa
const nomeLista = pessoas.map(valor => valor.nome)
console.log(nomeLista);

//Para cada elemento:
//Remova apenas a chave 'nome' do objeto
const removeNome = pessoas.map(valor => valor.idade)
console.log(removeNome);

//Para cada elemento:
//Adicione uma chave 'id' em cada objeto. No caso o Id vai ser o indice
const adicionaId = pessoas.map(function(valor, indice) {
  const novoValor = { ...valor } // feito para cria um novo array e nao alterar o original
  novoValor.id = indice
  return novoValor
})
console.log(adicionaId);