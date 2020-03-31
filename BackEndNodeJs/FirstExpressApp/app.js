var express=require("express");

var app=express();
app.get("/",function(req,res){
    res.send("first time server started");
});
app.get("/dog",function(req,res){
    res.send("next page response");
});


app.listen(3000,function(){
    console.log("server started");
});