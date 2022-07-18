import gameBoard from "./gameBoard";

export default function player(type){
    const Board = gameBoard();

    function getRandomInt(){
        const randX = Math.floor(Math.random() * 10);
        const randY = Math.floor(Math.random() * 10);
        return {
            'randX': randX,
            'randY': randY
        }
    }

    return {
        board: Board.board,
        placeShip(x,y,length){
            Board.placeShip(x,y,length);
        },
        attack(x,y){
            if (type === 'computer'){
                return (Board.receieveAttack(x,y));
            } else {
                let randomInt = getRandomInt();
                let attack = Board.receieveAttack(randomInt.randX, randomInt.randY);
                while (attack === 'already attacked'){
                    randomInt = getRandomInt();
                    attack = Board.receieveAttack(randomInt.randX, randomInt.randY);
                }
                return attack
            }
        },
        shipsSunk(){
            return (Board.allShipsSunk());
        } 
    }

}