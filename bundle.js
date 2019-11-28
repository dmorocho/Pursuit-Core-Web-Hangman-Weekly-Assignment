/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./View.js":
/*!*****************!*\
  !*** ./View.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsFiles_Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsFiles/Game.js */ "./jsFiles/Game.js");

class View{

    constructor(game,el){
        this.game = game;
        this.el = el

        this.play()
        

    }
    
    play(){
        if(this.game.isGameOver()){
            this.displayBoard();
            this.displayGuessed();
            this.displayImgs(this.game.guessesRemaining);
            this.bindEvents();
            console.log(this.game.computer.word)
        } else if(this.game.board.isComplete(this.game.computer.word)){
            this.endGameWin()   
        } else {
            // this.displayBoard();
            // this.removeItems();
            // this.end();
            displayImgs(numGuesses)
            let h2 = document.createElement("h2");
            h2.innerText = `You ran out of guesses! You lose! The word was: ${this.game.computer.reveal()}`;
            let boardDiv = document.querySelector("div");
        }
    }

    end() {
        if(this.game.board.isComplete(this.game.computer.word)){
            // let h2 = document.createElement("h2");
            // h2.innerText = "You won hangman! Congratulations winner!";
            // let boardDiv = document.querySelector("gameDiv");
            // boardDiv.appendChild(h2);
            // let playAgainBtn = document.createElement("button");
            // playAgainBtn.innerText = "Play again?"
            // playAgainBtn.id = "playagain";
            // boardDiv.appendChild(playAgainBtn);
            // this.newGame();
        } else {
            let h2 = document.createElement("h2");
            h2.innerText = `You ran out of guesses! You lose! The word was: ${this.game.computer.reveal()}`;
            let boardDiv = document.querySelector("gameDiv");
            boardDiv.appendChild(h2);
            
        }
    }
    // if they win the game
    endGameWin(){
        let h4 = document.querySelector("#guessesRemaining");
        h4.innerHTML =""
        let guess = document.querySelector("#guessdiv")
        guess.innerHTML = ""
        this.el.innerHTML = "";

        let winImg = document.createElement("img");
        let winSrc = `./images/win-speech-bubble.gif`;
        winImg.src = winSrc;
        winImg.id = "winImg"

        let img = document.createElement("img");
        let newSrc = `./images/win-speech-bubble.gif`;
        img.src = newSrc;
        img.id = "windial"

        let h2 = document.createElement("h2");
        h2.innerText = `The secret word was ${this.game.computer.word}`;

        this.el.appendChild(h2)
        this.el.appendChild(img)
        


        this.newGame();

    }


    endGamelose(){
        let guess = document.querySelector("#guessdiv")

        guess.innerHTML = ""
        this.el.innerHTML = "";

        let img = document.createElement("img");
        let newSrc = `./images/win-speech-bubble.gif`;
        img.src = newSrc;

        let h2 = document.createElement("h2");
        h2.innerText = `The secret word was ${this.game.computer.word}`;

        this.el.appendChild(h2)
        this.el.appendChild(img)
        


        this.newGame();



    }


    // create new game
    newGame(){
      
        let playAgainBtn = document.createElement("button");
        playAgainBtn.innerText = "Play again?"
        playAgainBtn.id = "playagain";

        this.el.appendChild(playAgainBtn);

        playAgainBtn.addEventListener("click", () => {
            playAgainBtn.parentNode.removeChild(playAgainBtn);
            let game = new _jsFiles_Game_js__WEBPACK_IMPORTED_MODULE_0__["default"](name);
            let el = document.querySelector("#gameDiv");
            new View(game,el);
        })
    }

    removeItems(){
        let p1 = document.querySelector("#enterGuess");
        p1.parentNode.removeChild(p1);
        let p2 = document.querySelector("#guessLetters");
        p2.parentNode.removeChild(p2);
        let input = document.querySelector("#letterInput");
        input.parentNode.removeChild(input);
        let btn = document.querySelector("#submitBtn");
        btn.parentNode.removeChild(btn);
        let h4 = document.querySelector("#guessesRemaining");
        document.body.removeChild(h4)
    }

    displayImgs(numGuesses){
        let imgDiv = document.createElement("div");
        let img = document.createElement("img");
        let newSrc = `./images/hangman_${numGuesses}.jpg`;
        img.src = newSrc;
        // debugger
        imgDiv.appendChild(img);
        this.el.prepend(imgDiv);
    }

    displayBoard(){
        this.el.innerHTML = "";
        let boardDiv = document.createElement("div");
        let currentBoard = this.game.board.displayBoard();
        let h1 = document.createElement("h1")
        h1.innerText = currentBoard;

        let h4 = document.createElement("h4");
        h4.id="guessesRemaining"
        document.body.appendChild(h4)

        let p = document.createElement("p");
        p.id="enterGuess";
        p.innerText = "Please enter a letter:"
        let guessed= document.createElement("p");
        guessed.id="guessLetters";

        boardDiv.appendChild(h1);
        boardDiv.appendChild(guessed);
        boardDiv.appendChild(p);

        this.el.appendChild(boardDiv);
        let guesses = this.game.guessLetters
        this.Letters(guesses)
    }

    bindEvents(){
        let ul = document.querySelector("#guessdiv")
        ul.addEventListener("click", (e) => {
            
            let input = e.toElement.innerText
            this.result(input)})
        // let button = document.querySelector("#submitBtn");
        // button.addEventListener("click", () => this.result());
    }
    
    displayGuessed(){
        let guessLetters = document.querySelector("#guessLetters");
        if(this.game.guessLetters.length === 0){
            guessLetters.innerText = "No guesses have been made";
        } else {
            let guessedLetters = this.game.guessLetters.join(", ");
            guessLetters.innerText = `Letters guessed already: ${guessedLetters}`;
        }
    }

    result(input){
        // let input = document.querySelector("#letterInput")
        let h4 = document.querySelector("#guessesRemaining")
        let p = document.querySelector("#enterGuess")
        if(this.game.isValidGuess(input.toLowerCase()) && !this.game.computer.word.includes(input.toLowerCase())){
            this.game.guessLetters.push(input.toLowerCase());
            this.game.guessesRemaining -= 1;
            h4.innerText = `Incorrect guess! Guesses remaining: ${this.game.guessesRemaining}`;
        } else if(this.game.isValidGuess(input.toLowerCase())){
            this.game.guessLetters.push(input.toLowerCase());
            this.game.board.addChar(this.game.computer.word, input.toLowerCase());
            h4.innerText = `Correct guess! Nice! Guesses remaining: ${this.game.guessesRemaining}`;
        } else {
            h4.innerText = "Please enter a valid letter!! " + "Guesses Remaining: " + this.game.guessesRemaining;
        }
        this.play();
    }

    Letters(guesses){
        let guessDiv = document.querySelector("#guessdiv")
        guessDiv.innerHTML = ""
        let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        let ul = document.createElement("ul")
        for(let i = 0; i< alpha.length; i++){
            let li = document.createElement("li")
            li.innerText=alpha[i]
         
            
            if(guesses.includes(alpha[i])){

                li.style.color = "red"
       
            }
            
            ul.appendChild(li)
        }

        guessDiv.appendChild(ul)

    }

    
    }
    


    // displayboard() {
    //     let gameDiv = document.createElement("div")
    //     let currentboard = this.game.board.displayBoard()
    //     gameDiv.id = "gameDiv"
    //     let h1 = document.createElement("h1")
    //     let input = document.createElement("input")
    //     let button = document.createElement("button")
    //     button.id = "guessBtn"
    //     button.innerText = "submit guess"
    //     h1.innerText = currentboard
    //     this.displayHangman(this.game.guessRemaining)
    //     gameDiv.appendChild(h1)
    //     gameDiv.appendChild(input)
    //     gameDiv.appendChild(button)
    //     debugger
    //     this.el.appendChild(gameDiv)
    
    // }
    // blind(){
    //     let button= document.querySelector("#guessBtn")

    //     button.addEventListener("click",(e) =>{
    //         let guess = document.querySelector("input")
    //          //run guess
    //         this.guess(guess)
    //         debugger
           

    //     })
    // }
    // //play funtion
    // // play ()
    // //is game over?
    // displayHangman(num){
    //     let img = document.createElement("img")
    //     let src ="./images/hangman_"+num+".jpg"
    //     img.src = src
    //     let hangmanDiv = document.createElement("div")
    //     hangmanDiv.appendChild(img)
    //     this.el.appendChild(hangmanDiv)
    

        
    // }

    


/* harmony default export */ __webpack_exports__["default"] = (View);








/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsFiles_Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsFiles/Game.js */ "./jsFiles/Game.js");
/* harmony import */ var _jsFiles_HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsFiles/HumanPlayer.js */ "./jsFiles/HumanPlayer.js");
/* harmony import */ var _jsFiles_HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jsFiles_HumanPlayer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jsFiles_ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsFiles/ComputerPlayer.js */ "./jsFiles/ComputerPlayer.js");
/* harmony import */ var _jsFiles_ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jsFiles_ComputerPlayer_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jsFiles_Board_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsFiles/Board.js */ "./jsFiles/Board.js");
/* harmony import */ var _jsFiles_Board_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jsFiles_Board_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./View.js */ "./View.js");






document.addEventListener("DOMContentLoaded",()=>{
let el = document.querySelector("#gameDiv") 
let startImage = document.createElement("img")
startImage.id = "startImage"
startImage.src ="./images/Professor__Oak.png"
el.appendChild(startImage)

let startdial = document.createElement("img")
startdial.id = "startdial"
startdial.src ="./images/start-speech-bubble.gif"
el.appendChild(startdial)

let button = document.createElement("button")
button.id="startGame"
button.innerText = "START"
el.appendChild(button)

button.addEventListener("click",()=>{

    let newGame = new _jsFiles_Game_js__WEBPACK_IMPORTED_MODULE_0__["default"](name)
    let el = document.querySelector("#gameDiv") 
    new _View_js__WEBPACK_IMPORTED_MODULE_4__["default"](newGame,el)


})


})

/***/ }),

/***/ "./jsFiles/Board.js":
/*!**************************!*\
  !*** ./jsFiles/Board.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 1. Board
//   * This would construct a board to the length. 
//   * It should check if the board is complete. 
//   * It should be able to add characters at differnect indicies. 

let {allTheWords} = __webpack_require__ (/*! ./words.js */ "./jsFiles/words.js")

//class of board

const {ComputerPlayer} = __webpack_require__(/*! ./ComputerPlayer.js */ "./jsFiles/ComputerPlayer.js")

class Board{
// the constructor will take in a length of a word to create the board
    constructor(length){
   this.board = new Array(length).fill("_")
   }

   // addChar take in an array and char, places the charater on the board at the index numbers in the arrays
//    addChar(arr, char){
//     for (let i = 0; i < arr.length; i++){
//         this.board[i] = char
//     }
//    }

   //addChar takes in user's guessLetter adds that letter on the board at the same index it appears on the word
   addChar(word, letter) {
    for(let i = 0; i < word.length; i++){
        if(word[i] === letter){
            this.board[i] = letter;
        }
    }
}

    //checks to see if the board is complete by comparing it to the word - boolean return
    isComplete(word){
        if(this.board.join("") === word){
            return true;
        } else {
            return false;
        }
    }
    //displays the board
    displayBoard(){
       let currentBoard = this.board.join(" ")
        return currentBoard
    }
}



module.exports = Board



/***/ }),

/***/ "./jsFiles/ComputerPlayer.js":
/*!***********************************!*\
  !*** ./jsFiles/ComputerPlayer.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 3. ComputerPlayer 
//   * Should have a dictionary.
//   * Should have secretWord and return it's length. 
//   * Should have a reveal. 
//   * Should give the positions of guessed characters. 
//   * Possibly have a getMove. 
const {allTheWords} = __webpack_require__(/*! ./words.js */ "./jsFiles/words.js");


class ComputerPlayer {
   constructor(computerPlayer){
    this.computerPlayer = computerPlayer
    this.word = allTheWords[(Math.floor(Math.random() * allTheWords.length))];
   }

lengthSecretWord(){
    return this.word.length
}
revealWord(){
   return this.word
  
}
}

module.exports = ComputerPlayer


/***/ }),

/***/ "./jsFiles/Game.js":
/*!*************************!*\
  !*** ./jsFiles/Game.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 4. Game 
//   * Should have guesser and referee. 
//   * Should have guesses remaining. 
//   * Should have a play function. 
//   * Should check for validity of guess. 
//   * Should have an isGameOver. 

// const readline = require('readline-sync')
const ComputerPlayer = __webpack_require__(/*! ./ComputerPlayer.js */ "./jsFiles/ComputerPlayer.js")
const HumanPlayer = __webpack_require__(/*! ./HumanPlayer.js */ "./jsFiles/HumanPlayer.js")
const Board = __webpack_require__(/*! ./Board.js */ "./jsFiles/Board.js")


class Game{
    constructor(name){
        this.computer = new ComputerPlayer()
        this.human = new HumanPlayer(name)
        this.board = new Board(this.computer.lengthSecretWord())
        this.guessesRemaining = 6
        this.guessLetters = []
   }

   // takes in the guesses remaing and put the lil dude at at index 
   displayAlien(num){
   
    let alien = [["🛸"],
            [],
            [],
            [],
            [],
            []]
    
    alien[num] = "🕴"

    for (let i = 0; i < alien.length; i++){
        console.log((alien[i].toString()));
    
    }
}

    //method that would run the game
   isGameOver(){
    if (this.guessesRemaining <= 0 || this.board.isComplete(this.computer.word)){
        return true;
    } else {
        return false;
    }
}

    // Main Play function 
playGame(){
    
    let secretWord = this.computer.word
    let message = "Guess the word or your coming with me!"


while(!this.isGameOver()){

    console.clear()
    this.displayAlien(this.guessRemaining)
    this.board.displayBoard();
    console.log(this.guessLetters.join())  
    console.log(message)
    console.log(`You have ${this.guessRemaining} remaining`)
    // console.log(secretWord) 


let guess = this.human.getMove()

if (this.isValid(guess) && (!this.guessLetters.includes(guess)) ){
    
    if(secretWord.includes(guess)){
        console.log(secretWord)
        this.board.addChar(this.computer.word, guess);
        this.guessLetters.push(guess)
        message = "You Guessed Right"
    }else{
    this.guessLetters.push(guess)
    this.guessRemaining -= 1
    message = "You Guessed Wrong "
    }

}else{
    message = "Invalid Move"
}
if(this.guessRemaining === 0){
    console.clear()
    this.board.displayBoard();
    console.log(`HA! the word was ${this.computer.revealWord()}`)
    console.log(`No more guesses ${name} 👽 time to start testing!`)
     break;
 }
if(this.board.isComplete(this.computer.word)){
    console.clear()

    this.board.displayBoard();
    // let secretWord = this.computer.word
    console.log(`UGH! ${name} YOUR FREE TO GO! RUN! GO ON!`)
     break;

    }


}

}
    
   //checks to see if the guess letter is in the alphabet, lowercase
isValid(guess){
    let valid = false
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if(alphabet.includes(guess.toLowerCase())){
        valid = true
    } else {
        valid = false
    }
    return valid
}

//checks if game is over
isGameOver(){
    return this.guessesRemaining > 0 && !this.board.isComplete(this.computer.word)
}


isValidGuess (guess){
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let valid = false;
    if(alphabet.includes(guess) && !this.guessLetters.includes(guess)){
        valid = true;
    }
    return valid;
}



}
/* harmony default export */ __webpack_exports__["default"] = (Game);

// let name = readline.question("👾 Hi there Human, What is your name?")
// let game = new Game(name)


// game.playGame()



/***/ }),

/***/ "./jsFiles/HumanPlayer.js":
/*!********************************!*\
  !*** ./jsFiles/HumanPlayer.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 2. HumanPlayer 
//   * Will need to getMove from player. 
//   * Display the board. 
//   * Possibly a select secret word that returns the length. 
//   * Possibly a givePostioins that returns an array of indicies. 
//   * Possibly a reveal word. 

// const readline = require("readline-sync");

const Board = __webpack_require__(/*! ./Board.js */ "./jsFiles/Board.js")

// const readline = require('readline-sync')

class HumanPlayer {
   constructor(player){
       this.player = player
   }
   // ask the player for a move 
   getMove(){
       return readline.question("Please choose a letter")
   }

   displayBoard(board){
       return board.join(" ")
   }

}
module.exports = HumanPlayer

// let jon = new HumanPlayer("jon")
// jon.getName()

/***/ }),

/***/ "./jsFiles/words.js":
/*!**************************!*\
  !*** ./jsFiles/words.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

//All Words

const  allTheWords = ["able", "about", "account", "acid", "across", "addition", "adjustment",
"advertisement", "after", "again", "against", "agreement", "almost", "among", "amount", "amusement", 
"angle", "angry", "animal", "answer", "apparatus", "apple", "approval", "arch", "argument", "army", 
"attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "balance",
"ball", "band", "base", "basin", "basket", "bath", "beautiful", "because", "before", "behaviour", 
"belief", "bell", "bent", "berry", "between", "bird", "birth", "bite", "bitter", "black", 
"blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot",
"bottle", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", 
"broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", 
"butter", "button", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cause", "certain", 
"chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church",
"circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb",
"come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex",
"condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", 
"cough", "country", "cover", "crack", "credit", "crime", "cruel", "crush", "current", "curtain", "curve",
"cushion", "damage", "danger", "dark", "daughter", "dead", "dear", "death", "debt", "decision", "deep", 
"degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", 
"digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", 
"distribution", "division", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", 
"drop", "dust", "early", "earth", "east", "edge", "education", "effect", "elastic", "electric", "engine", 
"enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", 
"experience", "expert", "face", "fact", "fall", "false", "family", "farm", "father", "fear", "feather", 
"feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", 
"fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fold", "food", "foolish", 
"foot", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", 
"front", "fruit", "full", "future", "garden", "general", "girl", "give", "glass", "glove", "goat", "gold",
"good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "hair", 
"hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hate", "have", "head", "healthy", "hear", 
"hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", 
"hospital", "hour", "house", "humour", "idea", "important", "impulse", "increase", "industry", "insect", 
"instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", 
"judge", "jump", "keep", "kettle", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land",
"language", "last", "late", "laugh", "lead", "leaf", "learning", "leather", "left", "letter", "level", 
"library", "lift", "light", "like", "limit", "line", "linen", "liquid", "list", "little", "living", "lock", 
"long", "look", "loose", "loss", "loud", "love", "machine", "make", "male", "manager", "mark", "market", 
"married", "mass", "match", "material", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", 
"middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon",
"morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name",
"narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "news", "night",
"noise", "normal", "north", "nose", "note", "number", "observation", "offer", "office", "only", "open", 
"operation", "opinion", "opposite", "orange", "order", "organization", "ornament", "other", "oven", "over", 
"owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", 
"pencil", "person", "physical", "picture", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", 
"plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "potato", 
"powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", 
"property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "quality", "question", 
"quick", "quiet", "quite", "rail", "rain", "range", "rate", "reaction", "reading", "ready", "reason", "receipt", 
"record", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", 
"rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "roll", "roof", "room", "root", "rough", 
"round", "rule", "safe", "sail", "salt", "same", "sand", "scale", "school", "science", "scissors", "screw", 
"seat", "second", "secret", "secretary", "seed", "seem", "selection", "self", "send", "sense", "separate", 
"serious", "servant", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", 
"short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "skirt", "sleep", 
"slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", 
"soap", "society", "sock", "soft", "solid", "some", "song", "sort", "sound", "soup", "south", "space", 
"spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", 
"station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", 
"stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", 
"structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "support", "surprise", 
"sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "teaching", "tendency", 
"test", "than", "that", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", 
"throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tired", "together", 
"tomorrow", "tongue", "tooth", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", 
"trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "value", "verse", "very", 
"vessel", "view", "violent", "voice", "waiting", "walk", "wall", "warm", "wash", "waste", "watch", "water", 
"wave", "weather", "week", "weight", "well", "west", "wheel", "when", "where", "while", "whip", "whistle", 
"white", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", 
"wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yesterday", "young"]

module.exports = {allTheWords}; 

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map