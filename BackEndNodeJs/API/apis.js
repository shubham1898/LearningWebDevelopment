var unirest = require("unirest");

var req = unirest("GET", "https://movie-database-imdb-alternative.p.rapidapi.com/");

req.query({"tconst": "tt0944947"
});

req.headers({
	"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
	"x-rapidapi-key": "de12931031msh8a099bfe5a74b32p18e380jsn4062b06bfe3e"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});