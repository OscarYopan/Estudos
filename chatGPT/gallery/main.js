const gallery = document.getElementById('gallery')

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg'
]

for (let i = 0; i < images.length; i++) {
  const img = document.createElement('img')
  img.src = images[i]
  gallery.appendChild(img)
}
