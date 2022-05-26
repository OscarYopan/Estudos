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