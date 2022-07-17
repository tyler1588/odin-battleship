import createShip from "./createShip";

export default function gameBoard(){
    const board = [
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '']
    ]

    const placesHit = [];

    return {
        board: board,
        placesHit: placesHit,
        placeShip(x,y,length){
            const ship = createShip(length);
            if (x >= 0 && y >= 0 && (y + ship.length) < 11){
                for (let i = 0; i < ship.length; i++){
                    board[x][y+i] = ship;
                }
            }
        },
        receieveAttack(x,y){
            if (board[x][y] === 'hit' || board[x][y] === 'miss'){
                return
            } 

            if (board[x][y] != ''){
                board[x][y].attack();
                placesHit.push([x,y]);
            }
        
        }
    }
}