import { brotliDecompressSync } from "zlib";

class View{

    constructor(game,el){
        this.game = game;
        this.el = el
        this.diplayboard()
    }
    
    diplayboard() {
        let gameDiv = document.createElement("div")
        let currentboard = this.game.board.board
        gameDiv.id = "gameDiv"

        for (let i = 0; i < currentboard.length; i++){
            let image = document.createElement("img")
            image.src = "./images/dash.png"
            gameDiv.appendChild(image)
           
            
        }
        this.el.appendChild(gameDiv)
    
        
    }
    

}
export default View