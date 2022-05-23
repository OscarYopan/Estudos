//ARRAYS
/*
- Pode-se colocar qualquer coisa dentro de uma array
- Como pratica se coloca apenas conteudos do mesmo tipó dentro de uma array
*/ 
//                0         1         2         3         4
const alunos = ['Oscar', 'Amanda', 'Vitor', 'Alicia', 'Sophia']
console.log(alunos);
console.log(alunos[3]);

const pontuacao = [7, 8, 5, 6, 9]
console.log(pontuacao);
console.log(pontuacao[3]);

pontuacao[3] = 7
console.log(pontuacao[3]);

console.log(pontuacao.length) //para saber o tamanho do array
pontuacao[5] = 12 //permite adicionar um elemento manualmete no final da array
console.log(pontuacao);
alunos.push('Felipe') // adicionar automaticamente um elemento no final da array
alunos.push('Marina')
alunos.push('Josoé')
console.log(alunos);

alunos.unshift('Luiza') // adiciona um elemento no incio do array
console.log(alunos);

alunos.pop() //remove o ultimo elemento
console.log(alunos);

const removido = alunos.pop() //remove o ulltimo elemento e jogo numa nova constante
console.log(alunos);
console.log(removido);