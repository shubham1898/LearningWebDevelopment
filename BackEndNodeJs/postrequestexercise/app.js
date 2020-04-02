var express=require("express");
var app=express();

var friends=["tom","hary","mary","gary","shady"];

app.get("/",function(req,res){
	// res.send("<h1> CONNECTED</h1>");
	res.render("home.ejs",{data:friends});
});
// app.post("/addFriend",function(req,res){
// 	var Friend=req.body.de;
// 	frnd.push(Friend);
// 	res.send("friend added");
// });
app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
	// res.redirect("/friends");
	// res.send("get")
	res.redirect("/frg");
});


app.get("/frg", function(req, res){
    res.render("friends.ejs", {data: friends});
});
app.listen(3000,function(){
	console.log("Server Online");
})