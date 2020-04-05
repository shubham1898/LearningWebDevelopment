var express=require("express");
var request=require("request");
const cheerio = require("cheerio");
const axios = require("axios");
const siteUrl = "https://www.instagram.com/shubhamshrivastav1898/?__a=1";
var result={};

  var app=express();
var bodyParser=require("body-parser");
                                                          // app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

                                                        // app.get("/",(req,res)=>{
                                                        //     // res.send("Connected 123")
                                                        //     res.render("home.ejs");
                                                        // });
                                                        // app.get("/",(req,res)=>{
                                                        //        var url= "http://www.instagram.com/shubhamshrivastav1898/?__a=1";
                                                        //         console.log(url);
const fetchData = async () => {
     result = await axios.get(siteUrl);//
    console.log(typeof result.data.graphql.user.edge_followed_by.count);               //return file as object
    return cheerio.load(result.data);
  };
 

  app.get("/",(req,res)=>{
    //   console.log(result.data); 
    fetchData();
    res.send(result.data.logging_page_id);
  });

    // request("www.google.com",function(error,body,response){          !Important Normal api request will not work use chrrio and axio get json file
    //     if(!error && response.statusCode == 200){
    //         console.log(typeof body);
    //         var parsedata=JSON.parse(body);
    //         res.send(parsedata);
    //          console.log(parsedata);
    //     }
       
    // });
// });
app.listen(3000,()=>{
    console.log("Serever online")
});
