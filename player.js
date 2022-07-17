import gameBoard from "./gameBoard";

export default function player(){
    const Board = gameBoard();

    return {
        board: Board.board,
        placeShip(x,y,length){
            Board.placeShip(x,y,length);
        },
        attack(x,y){
            Board.receieveAttack(x,y);
        },
        shipsSunk(){
            return (Board.allShipsSunk());
        } 
    }

}