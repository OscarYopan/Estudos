function onScroll() {  
  if(scrollY > 0) {
    navigation.classList.add('scroll')
    navigation.classList.remove('fix')
  }else{
    navigation.classList.remove('scroll')
    navigation.classList.add('fix')
  }
}

function onFix() {
  navigation.classList.add('fix')
}

function openMenu() {
  document.body.classList.add('menu-expanded')  
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}