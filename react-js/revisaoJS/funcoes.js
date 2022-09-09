//Declarar Funcoes:
/*
  - First Class object, pode tratar um função como um dado;
  - Ou seja, pode inlcuir uma função dentro de uma variavel;
*/

function sayHello() {
  console.log('Hello World');
}

sayHello() //Executa a funcao

//---//---//---//---//

//First Class object, pode tratar um função como um dado:
const souUmdado = function() {
  console.log('Sou um dado');
}

souUmdado()

//Executando a funcao acima como se fosse um parametro(dado)
function executaFuncao(funcao) {
  funcao()  
}

executaFuncao(souUmdado)

//---//---//---//---//

//Arrow Function

const arrowFunction =  () => {
  console.log('Sou uma Arrow Function');
}

arrowFunction()

//---//---//---//---//

//Dentro de um Objeto:

const objeto = {
  nome: 'Oscar',
  falar() {
    console.log("Função vinda de um Objeto");
  },
  idade: 35
}

objeto.falar()