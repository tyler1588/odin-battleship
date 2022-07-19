import { player1Logic } from "./gameLoop";
import { player2Logic } from "./gameLoop";

export default function renderShipsDOM(){
    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            if (player1Logic.board[i][j].name === 'ship'){
                const ship = document.getElementsByClassName('x'+i+' y'+j+' player1')[0];
                ship.classList.add('ship');
                
            }
        }
    }


    
}