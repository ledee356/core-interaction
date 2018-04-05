var dropbtn = document.querySelector('.dropbtn')
var content = document.querySelector('.dropdown-content')
dropbtn.addEventListener('mouseover', function(){
  console.log('hello')
  content.classList.add('.show')
})

dropbtn.addEventListener('mouseout', function(){
  content.classList.remove('.show')
})
