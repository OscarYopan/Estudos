const gallery = document.getElementById('gallery')

fetch('https://picsum.photos/200')
  .then(response => {
    const img = document.createElement('img')
    img.src = response.url
    gallery.appendChild(img)
  })
  .catch(error => {
    console.log(error)
  })
