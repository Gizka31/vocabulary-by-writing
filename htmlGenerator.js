const fs = require("fs")
const path = require("path")
const verbs = require("./public/arrays.js").verbs

const ejsPath = path.join(__dirname, "views", "layout.ejs")
let htmlFile = fs.readFileSync(ejsPath,"utf-8")
const container = `<div id="wordContainer">`
let htmlWords = ""
function generateWordsHTML(){
  for(let i = 0;i<verbs.length;i++){
    let string = `<div class = "word", id="${verbs[i]}">${verbs[i]}</div>`
    htmlWords = htmlWords+string
  }
  return htmlFile.slice(0, htmlFile.indexOf(container)+container.length+1) + htmlWords + htmlFile.slice(htmlFile.indexOf(container)+container.length)
}

module.exports = {generateWordsHTML, verbs}