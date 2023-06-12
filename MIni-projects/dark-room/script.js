document.addEventListener('mousemove', function (event) {
  var lighter = document.getElementById('lighter')
  var darkOverlay = document.getElementById('dark-overlay')
  var mouseX = event.pageX
  var mouseY = event.pageY

  lighter.style.transform = 'translate(' + mouseX + 'px, ' + mouseY + 'px)'

  if (darkOverlay.style.backgroundImage !== 'none') {
    darkOverlay.style.backgroundImage = 'none'
  }

  var rect = lighter.getBoundingClientRect()
  var x = event.clientX - rect.width / 2
  var y = event.clientY - rect.height / 2

  darkOverlay.style.webkitClipPath = 'circle(50px at ' + x + 'px ' + y + 'px)'
  darkOverlay.style.clipPath = 'circle(50px at ' + x + 'px ' + y + 'px)'
})
