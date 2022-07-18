import player from './player';
import gameBoardDOM from './gameBoardDOM';

export default function gameLoop(){
    gameBoardDOM('player1');
    gameBoardDOM('player2');

    const player1Logic = player('human');
    const player2Logic = player('computer');

    //Place ships
    player1Logic.placeShip(1,4,5);
    player1Logic.placeShip(0,0,3);
    player1Logic.placeShip(9,3,3);
    player1Logic.placeShip(5,6,4);
    player1Logic.placeShip(7,2,2);

    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            if (player1Logic.board[i][j].name === 'ship'){
                const ship = document.getElementsByClassName('x'+i+' y'+j+' player1')[0];
                ship.classList.add('ship');
                
            }
        }
    }

    player2Logic.placeShip(1,4,5);
    player2Logic.placeShip(0,0,3);
    player2Logic.placeShip(9,3,3);
    player2Logic.placeShip(5,6,4);
    player2Logic.placeShip(7,2,2);

    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 10; j++){
            if (player2Logic.board[i][j].name === 'ship'){
                const ship = document.getElementsByClassName('x'+i+' y'+j+' player2')[0];
                ship.classList.add('ship');
            }
        }
    }


    window.addEventListener('click', (event) => {
        if (event.target.classList[0] === 'board-space'){
            if (event.target.parentNode.classList[0] === 'player2'){
                alert(player2Logic.attack(event.target.classList[1][1], event.target.classList[2][1])); 
                alert(player1Logic.attack()); 
            }
        }
    })
};