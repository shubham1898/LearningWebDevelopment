//Module Loading
var express=require("express");
var request=require("request");
const cheerio = require("cheerio");
const axios = require("axios");
var bodyParser=require("body-parser");

//variables
const siteUrl = "https://www.instagram.com/shubhamshrivastav1898/?__a=1";
var result={};
var userid="";
var app=express();
app.use(bodyParser.urlencoded({extended: true}));

//body
const fetchData = async () => {
    result = await axios.get(siteUrl);//
   console.log(typeof result.data.graphql.user.edge_followed_by.count);               //return file as object
   return cheerio.load(result.data);
 };
fetchData();
 
 app.get("/",(req,res)=>{
    //   console.log(result.data); 
   userid=req.body.userID;
    res.render("home.ejs");
    // res.send(result.data.logging_page_id);
  });
app.get("/username",(req,res)=>{
    
    console.log(userid);
    res.render("result.ejs",{userid:userid})
});
  const newLocal = app.listen(3000, () => {
    console.log("Serever online");
});

// newLocal();
