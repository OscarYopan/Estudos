//Promises
/*
  - Promise é um objeto usado para processamento assíncrono. Uma Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
  - permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha.
  - permite que métodos assíncronos retornem valores como métodos síncronos: ao invés do valor final, o método assíncrono retorna uma promessa ao valor em algum momento no futuro.
  - Uma Promise está em um destes estados:
      - pending (pendente): Estado inicial, que não foi realizada nem rejeitada.
      - fulfilled (realizada): sucesso na operação.
      - rejected (rejeitado): falha na operação.
  
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

//Abaixo simularemos um função que demora um tempo para retornar um dado
function numeroAleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('Bad Value')
      return
    }

    setTimeout(() => {
      resolve(msg)
      return
    }, tempo)
  })
}

/*
esperaAi('Conectando!', numeroAleatorio(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Transferindo arquivos!', numeroAleatorio(1, 3))
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Instalando!', numeroAleatorio(1, 3))
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi(222, numeroAleatorio(1, 3))
  })
  .then(resposta => {
    console.log(resposta);
  })
  .catch(e => { // catch() sempre refe-se a erro
    console.log('ERRO:', e);
  })
  */

  //O JS nao espera a promese terminar para executar o programa

  //console.log('Isso será exibido antes de qualquer promise');

//Abaixo segue um exemplo de como seria fazer na força bruta, e sem controle de ordem de execução, visto que seria executado mesmo antes de finalizar a primeira execução:

// function esperaAi(msg, tempo) {
//   setTimeout(() => {
//     console.log(msg);
//   }, tempo)
// }

// esperaAi('Aguarde um momento!', numeroAleatorio(1, 2))
// esperaAi('mais um momento!', numeroAleatorio(1, 2))
// esperaAi('só mais um momento!', numeroAleatorio(1, 2))
// esperaAi('Pronto!', numeroAleatorio(1, 2))

/*
const promises = [
  //'primeiro valor',
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
  //esperaAi(1000, 1000),
  //'Outro valor'
]
*/

//Promisse.all
/*
Promise.all(promises)
  .then( valor => {
    console.log(valor);
  })
  .catch( erro => {
    console.log(erro);
  })
*/

  //Promisse.race
  /*
  Promise.race(promises)
    .then( valor => {
      console.log(valor);
    })
    .catch( erro => {
      console.log(erro);
    })
  */

function baixaPagina() {
  const emCache = true;

  if(emCache) {
    return Promise.resolve('Pagina em Cache');
  } else {
    return esperaAi('Baixei a Pagina', 3000);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log(e))