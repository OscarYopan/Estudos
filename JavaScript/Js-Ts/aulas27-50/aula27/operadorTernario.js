// OPERADORES TERNARIOS

/*
?
:
  - No caso de um 'if' e 'else' simples, pode ser substituido por um operador ternario. Usando-se os comandos acima.
  - Neste caso se pode fazer apenas uma linha de comando no formato abaixo

  (condição) ? 'valor para verdadeiro' : 'valor para falso'
*/

const usuarioX = 9909


//normal
if (usuarioX >= 1000){
  console.log('Usuario VIP');
} else {
  console.log('Usuario Comum');
}


//Operador ternario
const nivelUsuario = usuarioX >= 1000 ? 'Usuario VIP' : 'Usuario Comum';

console.log(nivelUsuario);

//Usando-se o ||(ou)

const corUsuario = null

const corPadrao = corUsuario || 'blue';

console.log(corPadrao);