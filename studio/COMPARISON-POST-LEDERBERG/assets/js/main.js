var selectOne = document.querySelector('.dropbtn.one')
var selectTwo = document.querySelector('.dropbtn.two')
var link = document.querySelector('.link')

var selectOneValue = null
var selectTwoValue = null

function changeHref(valOne, valTwo) {
	if (valOne && valTwo) {
		link.href = valOne + '_' + valTwo + '.html'
	}
}

selectOne.addEventListener('change', function() {
	selectOneValue = selectOne.value
	changeHref(selectOneValue, selectTwoValue)
})

selectTwo.addEventListener('change', function() {
	selectTwoValue = selectTwo.value
	changeHref(selectOneValue, selectTwoValue)
})
