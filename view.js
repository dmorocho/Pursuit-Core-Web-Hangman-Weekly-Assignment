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
            let results = "win"
            this.endGame(results)   
        } else {
            
            let results = "lose"
            this.endGame(results) 
       
        }
    }

    // doesnt work

    // readyAsh(){
    //     this.el.innerHTML = "";

    //     let Img = document.createElement("img");
    //     let src = `./images/get_ready.gif`;
        
    //     Img.src = src;
        
        
    //     this.el.appendChild(Img)

    //     debugger

    //     setTimeout(this.play(), 9000);

    //     // debugger


    // }



    
    // if they win/lose the game
    endGame(result){
        let h4 = document.querySelector("#guessesRemaining");
        h4.innerHTML =""

        let guess = document.querySelector("#guessDiv")
        guess.innerHTML = ""
        this.el.innerHTML = "";

        let winImg = document.createElement("img");
        let winSrc = `./images/${result}_Pokemon.gif`;
        winImg.src = winSrc;
        winImg.class = "Img"

        let img = document.createElement("img");
        let newSrc = `./images/${result}-speech-bubble.gif`;
        img.src = newSrc;
        img.id="dial"

        let h2 = document.createElement("h2");
        h2.innerText = `The secret word was ${this.game.computer.word}`;

        this.el.appendChild(winImg)
        this.el.appendChild(img)
        this.el.appendChild(h2)
        


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

    
    displayImgs(numGuesses){
        let imgDiv = document.createElement("div");
        let img = document.createElement("img");
        let newSrc = `./images/hangman_${numGuesses}.jpg`;
        img.src = newSrc;
   
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

        let img = document.createElement("img");
        img.id="enterGuess";
        img.src = "./images/game-speech-bubble.gif"

        let guessed= document.createElement("p");
        guessed.id="guessLetters";

        boardDiv.appendChild(h1);
        boardDiv.appendChild(guessed);
        boardDiv.appendChild(img);

        this.el.appendChild(boardDiv);
        let guesses = this.game.guessLetters
        this.Letters(guesses)
    }

    //waiting for click of a letter ul
    bindEvents(){
        let ul = document.querySelector("#letters")
        ul.addEventListener("click", (e) => {
            
            let input = e.toElement.innerText
            this.result(input)
        })
    }

    // displays the users guesses 
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
        let h4 = document.querySelector("#guessesRemaining")
        if(this.game.isValidGuess(input.toLowerCase()) && !this.game.computer.word.includes(input.toLowerCase())){
            this.game.guessLetters.push(input.toLowerCase());
            this.game.guessesRemaining -= 1;
            h4.innerText = `Incorrect guess! Guesses remaining: ${this.game.guessesRemaining}`;
        } else if(this.game.isValidGuess(input.toLowerCase())){
            this.game.guessLetters.push(input.toLowerCase());
            this.game.board.addChar(this.game.computer.word, input.toLowerCase());
            h4.innerText = `Correct guess! Guesses remaining: ${this.game.guessesRemaining}`;
        } else {
            h4.innerText = `Please enter valid Guess! Guesses Remaining: ${this.game.guessesRemaining}`;
        }
        this.play();
    }

    // creates letter list and turns red if letter is choosen

    Letters(guesses){
        let guessDiv = document.querySelector("#guessDiv")
        guessDiv.innerHTML = ""
        let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        let ul = document.createElement("ul")
        ul.id ="letters"
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






