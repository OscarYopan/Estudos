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

class Person{
  constructor(){
    this.name = 'max'
 }
  printMyName(){
    console.log(this.name);
  }
}