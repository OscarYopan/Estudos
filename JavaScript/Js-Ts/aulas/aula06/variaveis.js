let nome = 'João' //variavel recebendo um string que pode ser mudada
let lugar // variavel sem um definição inicial

console.log(`${nome} nasceu em 1984.`);
console.log(`Em 2000, ${nome} conheceu Maria.`);
console.log(`${nome} casou com Maria em 2012.`);
console.log(`Maria teve um filho com ${nome} em 2015.`);
console.log(`O filho de ${nome} se chama Eduardo.`);

console.log(lugar) // note que a variavel recebe um valor vazio 'undefined'

lugar = 'Brasilia-DF' // defini um valor para a variavel

console.log(lugar)

/*
  Variaveis
  - Não se deve usar palavras reservadas (if, else, let ...);
  - Recomenda-se usar nomes significativos;
  - Não pode começar o nome da variavel com um numero;
  - Recomenda-se usar letras minusculas no começo;
  - não deve conter 'espaços' ou 'traços';
  - Caso nome composto use camelCase;
  - Variaveis são case sensetive (sempre usa-se ela escrita totalmente igual).  
*/