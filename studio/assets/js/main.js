var video = document.querySelector('.rise')
video.addEventListener('mouseover', function() {
  video.play()
})

video.addEventListener('mouseout', function() {
  video.pause()
})


var high1 = document.querySelector('.high1')
var rise1 = document.querySelector('.rise1')
high1.addEventListener('mouseover', function(){
  console.log('hello')
  rise1.classList.add('is-active')
})

high1.addEventListener('mouseout', function(){
  rise1.classList.remove('is-active')
})
