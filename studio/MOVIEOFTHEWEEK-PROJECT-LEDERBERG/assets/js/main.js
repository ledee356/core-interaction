var video = document.querySelector('.video')
video.addEventListener('mouseover', function() {
  video.play()
})

video.addEventListener('mouseout', function() {
  video.pause()
})



fetch('https://www.omdbapi.com/?i=tt3896198&apikey=6d6fa250')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        render(jsonData);

    });

var movieTitle = document.querySelector('.title')
var movieDirector = document.querySelector('dir')
var movieDescription = document.querySelector('.desc')
var movieTrailer = document.querySelector('.video')
