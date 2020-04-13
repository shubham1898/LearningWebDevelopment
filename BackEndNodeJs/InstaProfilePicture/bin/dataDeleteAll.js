//Module Loading
var express = require("express");
var app=express();
//////////////-------------------///////////////

///////////////////////Databse Boiler///////////////
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://shubham:qwe56y8iop@cluster0-ymtjv.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("databse connected");
}).catch(err=>{
    console.log("error",err.message);
});

const dataphotoSchema=new mongoose.Schema({
    userid:String,
    postcount:String,
    fullname:String
});
const userdata=mongoose.model("userdata", dataphotoSchema);
//////////////---------------/////////////

// userdata.deleteMany({},(err,data)=>{
//     if(err){
//         console.log("not deleted");
//     }
//     else{
//         console.log("data deleted");
//         console.log(data);
//     }
// });

// userdata.find({},(err,data1)=>{
//     if(err){
//         console.log("something error");
//     }
//     else{
//         console.log("database");
//         console.log(data1);
//     }
// });

app.get("/api",async (req,res)=>{ 
    var data=await userdata.find({},async (err,data)=>{});
    res.send(data);
})

app.listen(3000, () =>{
    console.log("Serever online");
 });