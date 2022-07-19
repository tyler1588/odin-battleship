import { player2Logic } from "./gameLoop";

export default function attackDOM(event){ 
    if (event.target.classList[0] === 'board-space'){
        if (event.target.parentNode.classList[0] === 'player2'){
            const x = event.target.classList[1][1];
            const y = event.target.classList[2][1];
            const attack = player2Logic.attack(x,y);
            if (attack != 'already attacked'){
                const ship = document.getElementsByClassName('x'+x+' y'+y+' player2')[0];
                ship.classList.remove('ship');
                if (attack === 'hit'){
                    ship.classList.add('hit');
                } else if (attack === 'miss'){
                    ship.classList.add('miss');
                }
            } 
        }
    }
}