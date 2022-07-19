import { player1Logic, player2Logic } from "./gameLoop";

player1Logic

export default function gameOver(){
    if(player1Logic.shipsSunk()){
        alert('The computer won!')
        window.location.reload();
    } else if (player2Logic.shipsSunk()) {
        alert('You won!')
        window.location.reload();
    }
}