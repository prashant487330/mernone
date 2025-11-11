const express = require("express");
const app=express();
const EmpRoute = require("./routes/empRoute");
const cors= require("cors");
const bodyparser = require('body-parser')
const mongoose = require("mongoose");

// const { config } = require("dotenv");
// require("dotenv")=config;
require('dotenv').config();

// require("dotenv").config
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DB Succesfully Connected!");
})

app.use((req,res,next)=>{
    console.log("First app level middleware")
    next();
})
app.get("/home",(req,res)=>{
    console.log("Home Page")
    res.send("home page responsed")
})
app.get("/about",(req,res)=>{
    console.log("About Page")
    res.send("about page responsed")
})
app.get("/service",(req,res,next)=>{
    console.log("Service path level middleware")
    next();
},(req,res)=>{
    console.log("Service Page")
    res.send("service page responsed")
})
app.get("/service",(req,res,next)=>{
    console.log("Service1 path level middleware")
    next();
},(req,res,next)=>{
    console.log("Service2 path level middleware")
    next();
},(req,res)=>{
    console.log("this is Service Page")
    res.send("service page")
})
// error handling
app.get("/about",(req,res,next)=>{
    throw new Error('Example About Error')
})
app.get("/service",(req,res)=>{
    let name=true;
    if(name){
        res.status(200).send(err.error in service);
    }else{
        res.status(500).send(err.error in service);
    }
})
app.use((err,req,res,next)=>{
   console.log(err.stack);
   res.status(500).send(err.message);
})

app.use(cors());

app.use("/employees", EmpRoute);
const Port=process.env.PORT;
app.listen(8000, ()=>{
    console.log("process.env.PORT");
})