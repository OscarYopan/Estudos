// Classes são o que também chamamos de objetos
/*
class Person{
  name = 'max' //podem ter propriedades
  call = () => {'...'} // podem ter também métodos (function, arrow functions etc.)
}

//USAGE

const myPerson = new Person()

myPerson.call()

console.log(myPerson.name)

//inheritance

class Person extends Master
*/

class Human{
  constructor(){
    this.gender = 'male'
  }
  printGender(){
    console.log(this.gender);
  }
}

class Person extends Human{
  constructor(){
    super() //keyword para fazer a extensao da classe Human fucionar
    this.name = 'max' //propridade
 }
  printMyName(){
    console.log(this.name); // metodo para saida
  }
}

const person = new Person() // constante que recebe o metodo de saida
person.printMyName() // o que será feito
person.printGender() // vai mostrar o genero da classe 'person' herdado da classe 'Human'