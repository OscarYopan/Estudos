const menuBtn = document.querySelector('#burger')
const menu = document.querySelector('.menu')
const closebtn = document.querySelector('#close')
const closeIcon = document.querySelector('.close')
const menuIcon = document.querySelector('.burger')

menuBtn.addEventListener('click', () => {
  menu.classList.remove('remove')
  closeIcon.classList.remove('remove')
  menuIcon.classList.add('remove')
})

closebtn.addEventListener('click', () => {
  menu.classList.add('remove')
  closeIcon.classList.add('remove')
  menuIcon.classList.remove('remove')
})