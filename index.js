import {add, subtract} from "./helpers.js"

console.log(subtract(4,5))

document.querySelectorAll(".button").forEach(button=>{
    button.addEventListener("click", showText)
})

let quoteDisplayDiv = document.querySelector("#quote-display")

function showText(event) {
    event.preventDefault();
    let textFile = event.target.id
    fetch(`${textFile}.html`)
        .then(response => response.text())
        .then(data => {
            quoteDisplayDiv.innerHTML = data
        })
  }