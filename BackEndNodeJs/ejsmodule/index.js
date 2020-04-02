var express=require("express");
var app=express();

app.get("/", function(req,res){
	res.send("<h1> CONNECTED </h1>");
});

app.get("/loop/:iteration", function(req,res){
	// res.send("<h1> CONNECTED </h1>");
	var iteration=Number(req.params.iteration)
	var data=[
		{ author :"man", title: "wild"},
		{ author:"man2", title:"extrawild"}
		];
	res.render("text.ejs", {Iteration:iteration, data:data});
});

app.listen(3000, function(req,res){
	console.log("Website Online");
});
