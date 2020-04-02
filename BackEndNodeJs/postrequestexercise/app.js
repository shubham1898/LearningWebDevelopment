var express=require("express");
var app=express();

app.get("/",function(req,res){
	res.send("<h1> CONNECTED</h1>");
});
app.post("/addFriend",function(req,res){
	
	res.send("request send");
});


app.listen(3000,function(){
	console.log("Server Online");
})