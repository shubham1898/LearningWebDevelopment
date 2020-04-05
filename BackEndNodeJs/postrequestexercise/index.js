var { app, bodyParser } = newFunction_1();

app.use(bodyParser.urlencoded({extended: true}));

var friends=newFunction2();

newFunction1();
// app.post("/addFriend",function(req,res){
// 	var Friend=req.body.de;
// 	frnd.push(Friend);
// 	res.send("friend added");
// });
const newLocal_1 = app.post("/addfriend", function (req, res) {
	var newFriend = req.body.newfriend;
	friends.push(newFriend);
	// res.redirect("/friends");
	// res.send("get")
	res.redirect("/");
});


// app.get("/frg", function(req, res){
//     res.render("friends.ejs", {data: friends});
// });
const newLocal = newFunction();

function newFunction_1() {
	var express = require("express");
	var app = express();
	var bodyParser = require("body-parser");
	return { app, bodyParser };
}

function newFunction2() {
	return ["tom", "hary", "mary", "gary", "shady"];
}

function newFunction1() {
	app.get("/", function (req, res) {
		// res.send("<h1> CONNECTED</h1>");
		res.render("home.ejs", { data: friends });
	});
}

function newFunction() {
	return app.listen(3000, function () {
		console.log("Server Online");
	});
}
