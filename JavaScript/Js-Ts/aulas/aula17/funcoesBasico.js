//FUNCÔES
/*
- Programas são basicamente um consjunto de funções que funcionam de maneira organizada e seguindo padrões pré estabelecidos.
- O que está dentro de uma função só pode ser acessado pela própria função não por nada fora da funçõa.
- Fora da função temos acesso ao o que a função retorna e elementos de escopo global.
- Funções não execultam nada abaixo do 'return'
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
  console.log('Ola Mundo'); // não é executado, pois está abaixo do return.
}

console.log(soma(1, 2));