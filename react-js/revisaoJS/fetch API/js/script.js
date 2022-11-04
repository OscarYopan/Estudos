const url = 'https://jsonplaceholder.typicode.com/posts'

const loadingElement = document.querySelector('#loading')
const postsContainer = document.querySelector('#posts-container')

//Get All Posts
async function getAllPosts() {
  const response = await fetch(url)

  //Abaixo me permite recebere um array de objetos
  const data = await response.json()

  loadingElement.classList.add('hide')

  data.map((post) => {
    const div = document.createElement('div')
    const title = document.createElement('h2')
    const body = document.createElement('p')
    const link = document.createElement('a')
  
    title.innerText = post.title;
    body.innerText = post.body;
    link.innerText = 'Ler'
    link.setAttribute('href', `/post.html?id=${post.id}`)
  
    div.appendChild(title)
    div.appendChild(body)
    div.appendChild(link)
  
    postsContainer(div)
  })
}

getAllPosts()