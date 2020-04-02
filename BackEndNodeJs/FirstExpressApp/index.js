var express=require("express");
var app=express();

app.get("/",function(req,res){
	res.send("Welcome to Home Page .This is a dynamic web page");
});
app.get("/project/:thename/:noOfrepetation",function(req,res){
	var project=req.params.thename;
	var iteration=Number(req.params.noOfrepetation);
	var result="";
	for(var i=0;i<iteration;i++){
		result=result+project+" ";
	}res.send("running order response 1: "+result);
	});
app.get("/project2/:object/:iteration",function(req,res){
	var animal=req.params.object.toLowerCase();
	var loop=Number(req.params.iteration);
	var color={
		dog:"black",
		cat:"white",
		lion:"golden",
		horse:"brown"
	}
	var result="";
	for(var i=0;i<loop;i++){
		result=result+" "+ color[animal]+" "+animal;   //color.animal will not work as animal is a string color."animal" is error .here color[animal] should be used.
	}
	res.send("running response no 2: "+result);
	
});
app.get("*",function(req,res){
	res.send("Error Input");
});
app.listen(3000,function(){
	console.log("the server started");
});