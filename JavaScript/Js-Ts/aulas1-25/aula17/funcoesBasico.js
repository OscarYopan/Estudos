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

// Funcao com parametros pré definidos
function somar( x= 1,y=2){
  let total = x + y
  return total
}

console.log(somar()); // se nao definir nenhum paramentro ele usa-ra a pré definição.
console.log(somar(4)); //posso definir apenas um valor para x
console.log(somar(4, 5)); // se defino valores para x e y ele nao usara a pre definição

// FUNCAO ANONIMA

let raiz = function(n){ //funcao sem nome pois a variavel já recebeu um nome
  return n ** (1/2)
}; //nesse caso precia terminar com ';'

console.log(raiz(9));
console.log(raiz(4));

// ARROW FUNCTION

let raizQuadrada = n => n ** (1/2); //quando a função só teria uma linha dentros das chaves {}

console.log(raizQuadrada(9));
console.log(raizQuadrada(4));
console.log(raizQuadrada(25));