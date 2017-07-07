let fs = require("fs");

var action = process.argv[2]
var value = process.argv[3]

switch (action) {

  case "movie-shazam":
    omdbSearch();
    break;

  case "spotify-shazam":
    spotifySearch();
    break;

  case "my-tweets":
    twitterSearch();
    break;
}

function spotifySearch() {
  console.log("Spotify Hello!")
  console.log(value + " is a song")
//   let track = query;
//   let queryURL = "https://api.spotify.com/v1/search?q=" + track + "&type=track";
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).done(function(response) {
//
//   })
}

function omdbSearch() {
  console.log("Movie Hello!")
  console.log(value + " is a movie")

  // let movie;
  // let queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";
  //
  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).done(function(response) {
  //
  //
  // });
}

function twitterSearch() {
  console.log("Twitter Hello!")
}
