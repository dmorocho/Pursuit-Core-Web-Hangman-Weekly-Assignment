import Game from "./jsFiles/Game.js"
import HumanPlayer from "./jsFiles/HumanPlayer.js"
import ComputerPlayer from "./jsFiles/ComputerPlayer.js"
import Board from "./jsFiles/Board.js"
import View from "./View.js"
document.addEventListener("DOMContentLoaded",()=>{
    
let newGame = new Game(name)


let el = document.querySelector("#game")
let view = new View(newGame,el)


})