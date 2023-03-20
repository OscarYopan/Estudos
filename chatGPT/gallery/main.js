const gallery = document.getElementById('gallery')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

let startIndex = 0
const imagesPerScreen = 3

function displayGallery(images) {
  gallery.innerHTML = ''
  for (let i = startIndex; i < startIndex + imagesPerScreen; i++) {
    const img = document.createElement('img')
    img.src = images[i % images.length].download_url
    gallery.appendChild(img)
  }
}

function updateButtons(images) {
  prevBtn.disabled = startIndex === 0
  nextBtn.disabled = startIndex + imagesPerScreen >= images.length
}

fetch('https://picsum.photos/v2/list')
  .then(response => response.json())
  .then(images => {
    displayGallery(images)
    updateButtons(images)

    prevBtn.addEventListener('click', () => {
      startIndex -= imagesPerScreen
      displayGallery(images)
      updateButtons(images)
    })

    nextBtn.addEventListener('click', () => {
      startIndex += imagesPerScreen
      displayGallery(images)
      updateButtons(images)
    })
  })
  .catch(error => {
    console.log(error)
  })
