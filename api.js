let spotifySearch = function (query) {
  console.log("Spotify Hello!")
    let track = query;
    let queryURL = "https://api.spotify.com/v1/search?q=" + track + "&type=track";
    $.ajax({
        url: queryURL,
        method: "GET"
        },
        success: function (response) {
            return(response)
        }
    });
};

function omdbSearch() {
  console.log("Movie Hello!")
    let movie;
    let queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {


    });
  }

  function twitterSearch() {
    console.log("Twitter Hello!")
  }
