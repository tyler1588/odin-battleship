import gameBoard from "./gameBoard";

test('place ship at [0,0] with a length of 3', () => {
    const Board = gameBoard();
    Board.placeShip(0,0,3);
    expect(Board.board[0][0].length).toEqual(3);
    expect(Board.board[0][1].length).toEqual(3);
    expect(Board.board[0][1].length).toEqual(3);
});


test('attack ship at coordinate [0,0] with a length of 1, successful hit', () => {
    const Board = gameBoard();
    Board.placeShip(0,0,1);
    Board.receieveAttack(0,0);
    expect(Board.board[0][0].isSunk()).toBe(true);
});

test('attack ship at coordinate [0,0] with a length of 2, 2 successful hits', () => {
    const Board = gameBoard();
    Board.placeShip(0,0,2);
    Board.receieveAttack(0,0);
    expect(Board.board[0][0].isSunk()).toBe(false);
    Board.receieveAttack(0,1);
    expect(Board.board[0][1].isSunk()).toBe(true);
});

test('array captures areas attacked', () => {
    const Board = gameBoard();
    Board.placeShip(0,0,2);
    Board.receieveAttack(0,0);
    Board.receieveAttack(0,1);
    expect(Board.placesAttacked).toEqual([{'x': 0, 'y': 0}, {'x': 0, 'y': 1}]);
    expect(Board.receieveAttack(0,1)).toBe('already attacked');
});


test('array registers missed attack', () => {
    const Board = gameBoard();
    Board.receieveAttack(0,0);
    expect(Board.board[0][0]).toBe('miss');
    expect(Board.placesAttacked).toEqual([{'x': 0, 'y': 0}]);
    expect(Board.receieveAttack(0,0)).toBe('already attacked');
})

test('check if all ships are sunk', () => {
    const Board = gameBoard();
    Board.placeShip(0,0,1);
    Board.placeShip(1,1,1);
    expect(Board.allShipsSunk()).toEqual(false);
    Board.receieveAttack(0,0);
    expect(Board.allShipsSunk()).toEqual(false);
    Board.receieveAttack(1,1);
    expect(Board.allShipsSunk()).toEqual(true);
})


