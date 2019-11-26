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
        } else if(this.game.board.isComplete(this.game.computer.word)){
            this.displayBoard();
            this.removeItems();
            // this.end(); 
            
        } else {
            // this.el.innerHTML = "";
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
            let h2 = document.createElement("h2");
            h2.innerText = "You won hangman! Congratulations winner!";
            let boardDiv = document.querySelector("div");
            boardDiv.appendChild(h2);
            let playAgainBtn = document.createElement("button");
            playAgainBtn.innerText = "Play again?"
            playAgainBtn.id = "playagain";
            boardDiv.appendChild(playAgainBtn);
            this.newGame();
        } else {
            let h2 = document.createElement("h2");
            h2.innerText = `You ran out of guesses! You lose! The word was: ${this.game.computer.reveal()}`;
            let boardDiv = document.querySelector("div");
            boardDiv.appendChild(h2);
            let playAgainBtn = document.createElement("button");
            playAgainBtn.innerText = "Play again?"
            playAgainBtn.id = "playagain";
            boardDiv.appendChild(playAgainBtn);
            this.newGame();
        }
    }

    newGame(){
        let playAgain = document.querySelector("#playagain")
        playAgain.addEventListener("click", () => {
            playAgain.parentNode.removeChild(playAgain);
            let game = new Game(new Guesser("contestant"));
            let el = document.querySelector("#hm");
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
        let input = document.createElement("input");
        input.id ="letterInput";
        let button = document.createElement("button");
        button.id="submitBtn"
        button.innerText = "Submit";

        boardDiv.appendChild(h1);
        boardDiv.appendChild(guessed);
        boardDiv.appendChild(p);
        boardDiv.appendChild(input);
        boardDiv.appendChild(button);
        this.el.appendChild(boardDiv);
        this.Letters()
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

    Letters(guess){
        let guessDiv = document.querySelector("#guessdiv")
        guessDiv.innerHTML = ""
        let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        let ul = document.createElement("ul")
        for(let i = 0; i< alpha.length; i++){
            let li = document.createElement("li")
            li.innerText=alpha[i]
            if(this.game.guessLetters.includes(i)){
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

    


export default View






