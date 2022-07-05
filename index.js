// what is middleware

// Middleware functions are functions that have access to the request object ( req ), the response object ( res ), 
// and the next middleware function in the application's request-response cycle. The next middleware function is commonly 
// denoted by a variable named next .





const express=require('express');
const app=express();
 const middle1=function(req,res,next){
    console.log(" middle  1");
    next();
 }
 const middle2=function(req,res,next){
    console.log(" middle   2");
    next();
 }
 app.use(middle1);
 app.get('/Home',middle2,function(req,res){
    res.send("i am home")
 })
 app.get('/sachin',middle2,function(req,res){
    res.send("i am sachin")
 })
 app.get('/about',function(req,res){
    res.send("i am about")
 })
 app.get('/contact',function(req,res){
    res.send("i am contact")
 })
 
 app.listen(4000)
