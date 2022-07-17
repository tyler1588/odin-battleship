import gameBoard from "./gameBoard";

test('place ship at [0,0] with a length of 3', () => {
    const Board = gameBoard();
    Board.placeShip('a',0,3);
    expect(Board.board[0][0]).toEqual('not hit');
    expect(Board.board[0][1]).toEqual('not hit');
    expect(Board.board[0][2]).toEqual('not hit');
});

test('place ship at [1,7] with a length of 3', () => {
    const Board = gameBoard();
    Board.placeShip('b',7,3);
    expect(Board.board[1][7]).toEqual('not hit');
    expect(Board.board[1][8]).toEqual('not hit');
    expect(Board.board[1][9]).toEqual('not hit');
});

test('placing ship at [2,8] fails, as it is out of range', () => {
    const Board = gameBoard();
    Board.placeShip('c',8,3);
    expect(Board.board[2][7]).toEqual('c7');
    expect(Board.board[2][8]).toEqual('c8');
    expect(Board.board[2][9]).toEqual('c9');
});