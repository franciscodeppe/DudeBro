let fs = require("fs");

var keys = require("./keys.js");

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
  // console.log("Spotify Hello!")

  var key = keys.spotifykey
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
  // console.log("Movie Hello!")
  // console.log(value + " is a movie")

  let APIkey = Object.values(keys.omdbKey)

  // console.log(APIkey)

  let queryURL = "http://www.omdbapi.com/?apikey=" + APIkey + "&t=" + value + "&y=&plot=short&r=json";

  let request = require("request");
  request.post(queryURL, {json: true}, function(err, response, body) {
    if (err) {
      console.log(err)
    }
    console.log(
      "Title: " + body.Title +
      "\nYear: " + body.Year +
      "\nIMDB Rating: " + body.Ratings.imdbRating +
      "\nRottenTomato Rating: " + body.Ratings[0[2]] +
      "\nCountry: " + body.Country +
      "\nLanguage: " + body.Language +
      "\nPlot: " + body.Plot +
      "\nActors: " + body.Actors
      )
  })
}
function twitterSearch() {
  // console.log("Twitter Hello!")

  var key = APIkey.omdbkeys
}
