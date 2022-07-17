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
    expect(Board.placesHit).toEqual([[0,0],[0,1]]);
});

