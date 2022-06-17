// OPERADORES TERNARIOS

/*
?
:
  - No caso de um 'if' e 'else' simples, pode ser substituido por um operador ternario. Usando-se os comandos acima.
  - Neste caso se pode fazer apenas uma linha de comando
*/

const usuarioX = 9909

if (usuarioX >= 1000){
  console.log('Usuario VIP');
} else {
  console.log('Usuario Comum');
}

const nivelUsuario = usuarioX >= 1000 ? 'Usuario VIP' : 'Usuario Comum';

console.log(nivelUsuario);