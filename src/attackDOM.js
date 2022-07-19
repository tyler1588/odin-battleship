import { player1Logic, player2Logic } from "./gameLoop";

export default function attackDOM(event){ 
    if (event.target.classList[0] === 'board-space'){
        if (event.target.parentNode.classList[0] === 'player2'){
            const x = event.target.classList[1][1];
            const y = event.target.classList[2][1];
            const Player2attack = player2Logic.attack(x,y);
            if (Player2attack != 'already attacked'){
                const ship = document.getElementsByClassName('x'+x+' y'+y+' player2')[0];
                ship.classList.remove('ship');
                if (Player2attack === 'hit'){
                    ship.classList.add('hit');
                } else if (Player2attack === 'miss'){
                    ship.classList.add('miss');
                }

                const Player1attack = player1Logic.attack();
                const randX = Player1attack[1];
                const randY = Player1attack[2];
                const randShip = document.getElementsByClassName('x'+randX+' y'+randY+' player1')[0];
                randShip.classList.remove('ship');
                if (Player1attack[0] === 'hit'){
                    randShip.classList.add('hit');
                } else if (Player1attack[0] === 'miss'){
                    randShip.classList.add('miss');
                }
            } 
        }
    }
}