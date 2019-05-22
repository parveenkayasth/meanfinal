const express = require("express");
const app =  express();
const path =  require("path");
var distDir = "../dist/";
app.use(express.static(path.join(__dirname,distDir)));
app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname,"../dist/index.html"));
});

module.exports = app;