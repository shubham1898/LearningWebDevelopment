//Module Loading
var express=require("express");
var request=require("request");
const cheerio = require("cheerio");
const axios = require("axios");
var bodyParser=require("body-parser");

var app=express();
app.use(bodyParser.urlencoded({extended: true}));
//variables
const siteUrl = "https://www.instagram.com/shubhamshrivastav1898/?__a=1";
var result=["jjijiji"];
var userid={};
// var parsedata="";

//body
// const fetchData = async () => {
//     result = await axios.get(siteUrl);//
//    console.log(typeof result.data.graphql.user.edge_followed_by.count);               //return file as object
//    return cheerio.load(result.data);
//  };
// fetchData();
 app.get("/",function(req,res){
	 
    res.render("home.ejs",{res:result});
  });
const newlocal=app.post("/username",function(req,res){
	var parsedata=req.body.userID;
	result.push( parsedata);
	 console.log(result);
   res.redirect("/")
});
 
 app.listen(3000, () => {
    console.log("Serever online");
});

// newLocal();
