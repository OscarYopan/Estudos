let amigo = {nome:'Oscar', peso: '147', altura: '1.79',engordar(p=0){
  console.log('Engordou')
  this.peso+=p
}
}
amigo.engordar(2)
console.log(`Boa tarde ${amigo.nome} seu peso era ${amigo.peso}kg`)