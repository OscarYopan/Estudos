fetch('https://dummyjson.com/products/5')
.then(res => res.json())
.then(anounce => {
  createanouce(anounce)
})
.then(console.log);

function createanouce(anounce) {
  const resultado = document.querySelector('.resultado')

  resultado.innerHTML = `
  <div><img src="${anounce.thumbnail}" alt=""></div>
  <h3>${anounce.title}</h3>
  <p>${anounce.description}</p>
  <p>$ ${anounce.price},99 a vista</p>
  `
}




