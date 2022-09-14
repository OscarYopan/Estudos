//Promises
/*
  - Promise é um objeto usado para processamento assíncrono. Uma Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
  - permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha.
  - permite que métodos assíncronos retornem valores como métodos síncronos: ao invés do valor final, o método assíncrono retorna uma promessa ao valor em algum momento no futuro.
  - Uma Promise está em um destes estados:
      - pending (pendente): Estado inicial, que não foi realizada nem rejeitada.
      - fulfilled (realizada): sucesso na operação.
      - rejected (rejeitado): falha na operação.
  -
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

//Abaixo simularemos um função que demora um tempo para retornar um dado
function numeroAleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  setTimeout(() => {
    console.log(msg);
  }, tempo)
}

esperaAi('Aguarde um momento!', numeroAleatorio(1, 2))
esperaAi('mais um momento!', numeroAleatorio(1, 2))
esperaAi('só mais um momento!', numeroAleatorio(1, 2))
esperaAi('Pronto!', numeroAleatorio(1, 2))

