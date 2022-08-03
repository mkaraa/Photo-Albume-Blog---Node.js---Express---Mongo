const express = require("express")
const path = require("path")
const ejs = require("ejs")

const app = express();
const PORT = 5000;

app.use(express.static('public'))

app.set("view engine","ejs");

app.get("/", (req,res) => {
    // res.sendFile(path.resolve("temp/index.html"));
    res.render('index')
})

app.get("/about", (req,res) => {
    // res.sendFile(path.resolve("temp/index.html"));
    res.render('about')
})

app.get("/add", (req,res) => {
    // res.sendFile(path.resolve("temp/index.html"));
    res.render('add')
})


app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT localhost:${PORT}`);
})