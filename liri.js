var axios = require("axios");
var keys = require("./keys");
var moment = require("moment");
var fs = require("fs");
require("dotenv").config();

var movieName = process.argv[2];
var artist = process.argv[3];
var getMeMovieInfo = function(movieName){
    if (movieName === undefined){
      console.log("your movie is not in our data base we are dejafaulting to BloodSport")
      movieName = "BloodSport";
    }
  var urlHit =
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";

    axios.get(urlHit).then(function(response){
      console.log(response.data);
    });
};
getMeMovieInfo(movieName);

var getMyBands = function(artist){
  var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  axios.get(queryURL).then(function(response){
    var data = response.data;

    if(!data.length){
      console.log("no results found");
      return;
    }
    console.log("concerts for this artist: " + artist);

    for(var i = 0; i < data.length; i++){
      var concert = data[i];

      console.log(concert.venue.city + " " + concert.venue.region + " at " + concert.venue.name);


    }
  });
};
getMyBands(artist);

// node liri.js movieName artist
