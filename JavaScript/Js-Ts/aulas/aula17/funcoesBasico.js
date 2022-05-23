//FUNCÔES
/*
- Programas são basicamente um consjunto de funções que funcionam de maneira organizada e seguindo padrões pré estabelecidos.
*/

//criando uma função
function saudacao(nome) {
  console.log(`Bom dia ${nome}!`);
}

//chamar/executar uma função
saudacao('Oscar')
saudacao('Amanda')
saudacao('Vitor')

//Funcao com retorno

function comprimento(nome) {
  return `Boa tarde ${nome}!`
}

const variavel = comprimento('Juarez')
console.log(variavel);

//ex funcao
function soma(x, y) {
  let total = x + y
  return total  
}

console.log(soma(1, 2));