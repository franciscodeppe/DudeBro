var spotifySearch = function (query) {
    var track = query;
    var queryURL = "https://api.spotify.com/v1/search?q=" + track + "&type=track";
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
    var movie =
    var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {


    });

  }
