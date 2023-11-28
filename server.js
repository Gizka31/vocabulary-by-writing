
const express = require("express")
const path = require("path")
const app = express()
const port = 8000
const renderHTML = require("./htmlGenerator.js").generateWordsHTML


let html = renderHTML()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")))

app.get("/",(req,res)=>{

     res.send(html) 

})
app.get("/arrays",(req,res)=>{

     res.send(require("./public/arrays.js")) 

})
app.listen(port, ()=>console.log("Server is running on port:8000"))








