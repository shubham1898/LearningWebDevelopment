//Module Loading
var express = require("express");
var request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
//variables
var parsedata = "";
var siteUrl = "";
var result = {};
var globalresult = {};
var id="";
var postcount="";
var count1=0;

const fetchData = async () => {
    try {
        result = await axios.get(siteUrl);
        globalresult = result.data;               //return file as object
        return cheerio.load(result.data);
    }
    catch (e) {
        console.error(e); // log internal error
        return next(new Error('Internal Server Error')); // return public error to client
    }
    
};
app.get("/",async (req, res) =>{
    try{
    res.render("home.ejs");
    }
    catch (e) {
        console.error(e); // log internal error
        return next(new Error('Internal Server Error')); // return public error to client
    }
});

app.post("/username", async (req, res)=> {
    try {
        parsedata = req.body.userID;
        siteUrl = "https://www.instagram.com/"+parsedata+"/?__a=1";
        //for getting user ID and post count of user
        await fetchData();
        id=globalresult.logging_page_id.slice(12,22);
        var profilepicurl=globalresult.graphql.user.profile_pic_url;
        var full_name=globalresult.graphql.user.full_name;
        var bio=globalresult.graphql.user.biography;
        postcount=globalresult.graphql.user.edge_owner_to_timeline_media.count;
        //using their data in another api to get all media
        siteUrl = 'https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":'+id+',"first":'+postcount+',"after":null}';
        globalresult={};
        await fetchData();
        data=globalresult.data.user.edge_owner_to_timeline_media.edges;
        // console.log(data[50].node.display_url);
        res.render("result.ejs", {data:data, userid:id, postcount:postcount,fullname:full_name,bio:bio,k:count1,profilepicurl:profilepicurl});
    }
    catch (e) {
        console.error(e); // log internal error
        return next(new Error('Internal Server Error')); // return public error to client
    }
});

app.listen(3000, () => {
    console.log("Serever online");
 });