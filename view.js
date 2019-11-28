import Game from "./jsFiles/Game.js"
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

        let guess = document.querySelector("#guessDiv")
        guess.innerHTML = ""
        this.el.innerHTML = "";

        let winImg = document.createElement("img");
        let winSrc = `./images/win_Pokemon.gif`;
        winImg.src = winSrc;
        winImg.id = "winImg"

        let img = document.createElement("img");
        let newSrc = `./images/win-speech-bubble.gif`;
        img.src = newSrc;
        img.id = "windial"

        let h2 = document.createElement("h2");
        h2.innerText = `The secret word was ${this.game.computer.word}`;

        this.el.appendChild(winImg)
        this.el.appendChild(img)
        this.el.appendChild(h2)
        


        this.newGame();

    }


    endGamelose(){
        let guess = document.querySelector("#guessDiv")

        // guess.innerHTML = ""
        this.el.innerHTML = "";

        let winImg = document.createElement("img");
        let winSrc = `./images/win_Pokemon.gif`;
        winImg.src = winSrc;
        winImg.id = "winImg"

        let img = document.createElement("img");
        let newSrc = `./images/lose-speech-bubble.gif`;
        img.src = newSrc;

        let h2 = document.createElement("h2");
        h2.innerText = `The secret word was ${this.game.computer.word}`;

        this.el.appendChild(h2)
        this.el.appendChild(img)
        this.el.appendChild(winImg)
        


        this.newGame();



    }


    // create new game
    newGame(){
        let guess = document.querySelector("#guessDiv")
        let playAgainBtn = document.createElement("button");
        playAgainBtn.innerText = "Play Again?"
        playAgainBtn.id = "playagain";

        guess.appendChild(playAgainBtn);

        playAgainBtn.addEventListener("click", () => {
            playAgainBtn.parentNode.removeChild(playAgainBtn);

            let game = new Game(name);
            let el = document.querySelector("#gameDiv");

            new View(game,el);
        })
    }

    // removeItems(){
    //     let p1 = document.querySelector("#enterGuess");
    //     p1.parentNode.removeChild(p1);
    //     let p2 = document.querySelector("#guessLetters");
    //     p2.parentNode.removeChild(p2);
    //     let input = document.querySelector("#letterInput");
    //     input.parentNode.removeChild(input);
    //     let btn = document.querySelector("#submitBtn");
    //     btn.parentNode.removeChild(btn);
    //     let h4 = document.querySelector("#guessesRemaining");
    //     document.body.removeChild(h4)
    // }

    displayImgs(numGuesses){
        let imgDiv = document.createElement("div");
        let img = document.createElement("img");
        let newSrc = `./images/hangman_${numGuesses}.jpg`;
        img.src = newSrc;
        // debugger
        imgDiv.appendChild(img);
        this.el.prepend(imgDiv);
    }

    //displays: hangman image, guesses remaining, guessed letters

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

    //waiting for click of a letter 
    bindEvents(){
        let ul = document.querySelector("#guessDiv")
        ul.addEventListener("click", (e) => {
            
            let input = e.toElement.innerText
            this.result(input)
        })
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

    //takes in the input from bindevents 
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

    // creates letter list and turns red if letter is choosen

    Letters(guesses){
        let guessDiv = document.querySelector("#guessDiv")
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
    


    


export default View






