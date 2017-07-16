let fs = require("fs");
let Twitter = require("twitter")
let Spotify = require("node-spotify-api")

var keys = require("./keys.js");

var action = process.argv[2]
var value = process.argv[3]

switch (action) {

    case "movie-this":
        omdbSearch();
        break;

    case "spotify-this-song":
        spotifySearch();
        break;

    case "my-tweets":
        twitterSearch();
        break;

    case "do-what-it-says":
		doWhatItSays();
        break;
}

function omdbSearch() {
    if (!value) {
        value = "Mr. Nobody"
    }

    let APIkey = Object.values(keys.omdbKey)

    let queryURL = "http://www.omdbapi.com/?apikey=" + APIkey + "&t=" + value + "&y=&plot=short&r=json";

    let request = require("request");
    request.post(queryURL, {
        json: true
    }, function(err, response, body) {
        if (err) {
            console.log(err)
        }
        // console.log(body)
        console.log(
            "Title: " + body.Title +
            "\nYear: " + body.Year +
            "\nIMDB Rating: " + body.imdbRating +
            "\n" + Object.values(body.Ratings[1]) +
            "\nCountry: " + body.Country +
            "\nLanguage: " + body.Language +
            "\nPlot: " + body.Plot +
            "\nActors: " + body.Actors
        )
    })
}

function spotifySearch() {

    // console.log("Spotify Hello!")

    var APIkey = keys.spotifyKey

    // console.log(value + " is a song")

    let spotify = new Spotify(APIkey);

    let input = {
        type: "track",
        query: value
    }

    spotify.search(input, function(err, data) {
        if (err) {
            console.log(err)
        }
        for (var i = 0; i < 5; i++) {
            console.log("Artist: " + data.tracks.items[i].artists[0].name + "\n" +
                "Song: " + data.tracks.items[i].name + "\n" +
                "Preview: " + data.tracks.items[i].external_urls.spotify + "\n" +
                "Album: " + data.tracks.items[i].album.name
			+ "\n");
        }
    });
}

function twitterSearch() {
    // console.log("Twitter Hello!")

    let APIkey = keys.twitterKey;
    let input = {
        screen_name: "francisco_deppe"
    };
    let client = new Twitter(APIkey);

    client.get("statuses/user_timeline", input, function(err, tweets, res) {
        if (err) {
            console.log(err)
        }
        for (var i = 0; i < tweets.length; i++) {
            console.log(
                "Username: " + tweets[i].user.screen_name +
                "\nTweet: " + tweets[i].text +
                "\nDate: " + tweets[i].created_at
            );
        }
    })
}

function doWhatItSays() {
	fs.readFile("random.txt", "utf8", function(error, data) {
		var defaultSearch = data.split(",")

	value = defaultSearch[1]
	action = defaultSearch[0]
	// console.log(action)
	// console.log(value)
	switch (action) {
	    case "movie-this":
	        omdbSearch();
	        break;

	    case "spotify-this-song":
	        spotifySearch();
	        break;

	    case "my-tweets":
	        twitterSearch();
	        break;
	}
    });
}
