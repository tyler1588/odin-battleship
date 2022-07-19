import player from './player';
import gameBoardDOM from './gameBoardDOM';
import attackDOM from './attackDOM';
import renderShipsDOM from './renderShipsDOM';
import gameOver from './gameOver';

const player1Logic = player('human');
const player2Logic = player('computer');

export default function gameLoop(){
    gameBoardDOM('player1');
    gameBoardDOM('player2');

    //Place ships
    player1Logic.placeShip(1,4,5);
    player1Logic.placeShip(0,0,3);
    player1Logic.placeShip(9,3,3);
    player1Logic.placeShip(5,6,4);
    player1Logic.placeShip(7,2,2);


    player2Logic.placeShip(1,4,5);
    player2Logic.placeShip(0,0,3);
    player2Logic.placeShip(9,3,3);
    player2Logic.placeShip(5,6,4);
    player2Logic.placeShip(7,2,2);

    renderShipsDOM();

    window.addEventListener('click', (event) => {
        attackDOM(event);
        gameOver();
    })
};

export {player1Logic, player2Logic}