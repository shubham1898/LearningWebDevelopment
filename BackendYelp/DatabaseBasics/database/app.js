const express=require("express");
const app=express();

const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://shubham:qwe56y8iop@cluster0-ymtjv.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected to database");
}).catch(err=>{
    console.log("error",err.message);
});

let book1;

const data1schema=new mongoose.Schema({
    title:String,
    bookno:Number
});

const data1=mongoose.model("data1", data1schema);
const createdata=async ()=>{
     book1= await data1.create({
        title:"da vinci code",
        bookno:1
    })
}

app.get("/",async (req,res)=>{
        createdata();

    res.send(book1);
});

app.listen(3000,()=>{
    console.log("server online");
})
