var express=require("express");
var app=express();

var request=require("request");
 
console.log("api data callback");

// request("https://currencyapi.net/api/v1/rates?key=b1ecc5d090a21c65d86ca69fd39c3701e21c",function(error,body,response){
request("https://jsonplaceholder.typicode.com/posts",function(error,response,body){
    if(!error && response.statusCode == 200)
{
var parsedata=JSON.parse(body);
    console.log(parsedata[71]["body"]);}
});