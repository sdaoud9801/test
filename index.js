const express = require("express");
const app = new express();
const multer = require("multer");
const fs = require("fs");
const google = require("./upload-file.js")
const multerStorage = multer.memoryStorage()
const upload = multer({ storage: multerStorage })
const port = process.env.PORT || 3001;


app.use(express.json());


app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/",upload.single('file'),async (req,res)=>{
    await google.uploadFromMemory(req.file.buffer);
})

app.listen(port,()=>{
    console.log("Application listening on port ${port}");
})



