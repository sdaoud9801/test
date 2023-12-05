const express = require("express");
const app = new express();
const multer = require("multer");
const fs = require("fs");
const google = require("./upload-file.js")
const multerStorage = multer.memoryStorage()
const upload = multer({ storage: multerStorage })



app.use(express.json());


app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/",upload.single('file'),async (req,res)=>{
    await google.uploadFromMemory(req.file.buffer);
})

app.listen(3000,()=>{
    console.log("Application listening on port 3000");
})



