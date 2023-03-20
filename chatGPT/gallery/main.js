const gallery = document.getElementById('gallery')
const apiKey = '@oscaracois'

fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const img = document.createElement('img')
    img.src = data.urls.regular
    gallery.appendChild(img)
  })
  .catch(error => {
    console.log(error)
  })
