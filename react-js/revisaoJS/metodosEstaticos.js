//Metodos Estaticos
/*
  - Metodos que voce pode acessar na classe, se usar o 'new';
  - São basicamento funções que estao dentro da classe;
  - Só é possivel acessar pela classe
*/

class ControleRemoto {
  constructor(tv) {
    this.tv = tv
    this.volume = 0
  }
  
  //Metodo de intancia
  aumentarVolume() {
    this.volume += 1
  }

  //Metodo de intancia
  diminuirVolume() {
    this.volume -= 1
  }

  //Metodo Estatico
  static trocarPilha() {
    console.log('ok, trocado!');
  }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()

console.log(controle1);

//Metodo Statico, funcionando para todos
ControleRemoto.trocarPilha()