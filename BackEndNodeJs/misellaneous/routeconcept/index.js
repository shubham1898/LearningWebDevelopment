var express=require("express");
var app=express();

var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    //  var parsedata=req.body.data;
    //     console.log(parsedata);

    res.render("home.ejs");
    // res.send("connected to home route");
    });

    app.post("/secondpage",function(req,res){     //when form:get app.get then undefined data no data called it just append variable into url
        var parsedata1=req.body.data;              //when form:post app.post then form data is stored
        console.log(parsedata1);                 //when form:post app.get then error cannot post /secondpage
        res.render("secondpage.ejs");            // form:get app.post then erro cannot get/second page
    // res.send("connected to secondpage route");
});


app.listen(3000,function(req,res){
    console.log("Server Online");
});