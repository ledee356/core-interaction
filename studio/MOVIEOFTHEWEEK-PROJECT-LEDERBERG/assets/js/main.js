// var video = document.querySelector('.video')
// video.addEventListener('mouseover', function() {
//   video.play()
// })
//
// video.addEventListener('mouseout', function() {
//   video.pause()
// })

var movieIdArray = ['tt3235888', 'tt4695012', 'tt1935179', 'tt6265828', 'tt3721936', 'tt0365748', 'tt0119396', 'tt185610', 'tt4263482', 'tt4062536', 'tt4302938', 't2235108', 'tt1133989', 'tt0418763', 'tt1020072', 'tt2562232', 'tt6217608', 'tt5742374', 'tt0209933', 'tt4846232', 'tt0462335', 'tt3464902', 'tt5325492', 'tt6303866', 'tt5962210', 'tt2334649', 'tt0120601', 't1560747', 'tt2582496', 'tt2125435', 'tt0443706']
var date = (new Date()).getDate()

console.log(date)

// Insert your actual API request URL below
fetch('https://www.omdbapi.com/?apikey=6d6fa250&i=' + movieIdArray[date + 1] )
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(jsonData);
		  render(jsonData);
    });


var movieTitle = document.querySelector('.mov_title')
var movieDirector = document.querySelector('.dir')
var movieDescription = document.querySelector('.desc')
var moviePoster = document.querySelector('.mov_image')

function render(data) {

  console.log(data);

  console.log(data.Title);

  console.log(data.Director);

  console.log(data.Plot);

  console.log(data.Poster);

  movieTitle.innerText = data.Title;

  movieDirector.innerText = data.Director;

  movieDescription.innerText = data.Plot;

  moviePoster.innerText = data.Poster;
}

// var movieIdArray = ['tt3235888', 'tt4695012', 'tt1935179', 'tt6265828', 'tt3721936', 'tt0365748', 'tt0119396', 'tt185610', 'tt4263482', 'tt4062536', 'tt4302938', 't2235108', 'tt1133989', 'tt0418763', 'tt1020072', 'tt2562232', 'tt6217608', 'tt5742374', 'tt0209933', 'tt4846232', 'tt0462335', 'tt3464902', 'tt5325492', 'tt6303866', 'tt5962210', 'tt2334649', 'tt0120601', 't1560747', 'tt2582496', 'tt2125435', 'tt0443706']
// var date = (new Date()).getDate()
//
// console.log(date)
//
// // Insert your actual API request URL below
// fetch('https://api.themoviedb.org/3/movie/550?api_key=15b577749fdff335892237d2846429f3' + movieIdArray[date + 1] )
//     .then(function(response) {
//         // Get the response and format it to JSON
//         return response.json();
//     })
//     .then(function(jsonData) {
//         // log the data
//         console.log(jsonData);
// 		  render(jsonData);
//     });
