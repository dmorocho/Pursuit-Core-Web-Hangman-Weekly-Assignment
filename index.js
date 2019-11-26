import Game from "./jsFiles/Game.js"
import HumanPlayer from "./jsFiles/HumanPlayer.js"
import ComputerPlayer from "./jsFiles/ComputerPlayer.js"
import Board from "./jsFiles/Board.js"
import View from "./View.js"

document.addEventListener("DOMContentLoaded",()=>{
let el = document.querySelector("#gameDiv") 
let startImage = document.createElement("img")
startImage.id = "startImage"
startImage.src ="./images/Professor__Oak.png"
el.appendChild(startImage)

let startdial = document.createElement("img")
startdial.id = "startdial"
startdial.src ="./images/pixel-speech-bubble.gif"
el.appendChild(startdial)

let button = document.createElement("button")
button.id="startGame"
button.innerText = "START"
el.appendChild(button)

button.addEventListener("click",()=>{

    let newGame = new Game(name)
    let el = document.querySelector("#gameDiv") 
    new View(newGame,el)


})


})