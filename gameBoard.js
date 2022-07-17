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

    const placesAttacked = [];
    const shipLocations = [];

    return {
        board: board,
        placesAttacked: placesAttacked,
        placeShip(x,y,length){
            const ship = createShip(length);
            if (x >= 0 && y >= 0 && (y + ship.length) < 11){
                for (let i = 0; i < ship.length; i++){
                    board[x][y+i] = ship;
                }
                shipLocations.push({'x': x, 'y': y});
            }
        },
        receieveAttack(x,y){
            if (placesAttacked.some(e => (e.x === x && e.y === y))) {
                return ('already attacked');
            }

            if (board[x][y] === ''){
                board[x][y] = 'miss';
                placesAttacked.push({'x': x, 'y': y});
                return ('miss');
            }

            if (board[x][y] != ''){
                board[x][y].attack();
                placesAttacked.push({'x': x, 'y': y});
                return ('hit');
            }
        },
        allShipsSunk(){
            let sunk = true;
            for (let i = 0; i < shipLocations.length; i++){
                const xCord = shipLocations[i].x;
                const yCord = shipLocations[i].y;
                if (board[xCord][yCord].isSunk() === false){
                    sunk = false
                }
            }
            return sunk
        }
    }
}