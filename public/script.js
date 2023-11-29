document.addEventListener('DOMContentLoaded',async function () {

const response = await fetch("http://localhost:8000/arrays")
const values = await response.json()

let giveUpButton = document.querySelector("#giveUp");
let restartButton = document.querySelector("#restart");
let input = document.querySelector("#wordInput");
let wordCount = document.querySelector(".wordCount")
let example = document.querySelector("#example")
let translation = document.querySelector("#exampleTranslation")
let exampleSwitch = document.querySelector("#exampleSwitch") 

let wordNumber = document.querySelectorAll(".word").length
let wordsGuessed = 0
wordCount.textContent = `${wordsGuessed}/${wordNumber}`

const verbs = values.verbs
const additional = values.additional
let additionalState = true

input.addEventListener("keypress",(event)=>{
    
    if(event.key === "Enter"){

        let word = document.querySelector(`#${input.value}`)

        if(word){
            word.classList.remove("word")
            word.classList.add("done")
            wordsGuessed+=1
            wordCount.textContent = `${wordsGuessed}/${wordNumber}`
            if(additionalState){
                example.textContent = additional.example[verbs.indexOf(word.textContent)]
                translation.textContent = additional.translation[verbs.indexOf(word.textContent)]
            }
        }

        input.value = ""
        
    }
})

giveUpButton.addEventListener("click",(event)=>{
let words = document.querySelectorAll(".word")
words.forEach((word)=>{
    word.classList.remove("word")
    word.classList.add("done")
})
})

restartButton.addEventListener("click",(event)=>{
    let words = document.querySelectorAll(".done")
    words.forEach((word)=>{
        word.classList.remove("done")
        word.classList.add("word")
        
        wordsGuessed = 0
        wordCount.textContent = `${wordsGuessed}/${wordNumber}`

        example.textContent = ""
        translation.textContent = ""

    })
})

exampleSwitch.addEventListener("click",(event)=>{
        additionalState = (additionalState === true)?false:true
        console.log(additionalState)
})
});

