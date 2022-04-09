let pessoa = { // objetos são colocados dentro de chaves
  nomeCompleto: "Oscar Yopan", // chave: valor
  idade: 35, //Para mais de uma chave usar ','
  peso: 147,    
}

pessoa.idade = 33 //para alterar um atributo de uma variavel ou objeto
pessoa['nomeCompleto'] = 'Oscar Luis Yopan' //Outra maneira de modificar atributo

console.log(pessoa) // mostra todo o objeto
console.log(pessoa.idade) //mostra apenas uma variavel de dentro do objeto