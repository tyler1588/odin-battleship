import player from "./player";

test('player has a game board', () => {
    const player1 = player();
    expect(player1.board[0][0]).toEqual('');
})

test('player board can receive attack', () => {
    const player1 = player();
    player1.attack(0,0);
    expect(player1.board[0][0]).toEqual('miss');
})

test('player board can place a ship', () => {
    const player1 = player();
    player1.placeShip(0,0,3);
    expect(player1.board[0][0].length).toBe(3);
})

test('player ship can take an attack', () => {
    const player1 = player();
    player1.placeShip(0,0,1);
    expect(player1.shipsSunk()).toBe(false);
    player1.attack(0,0);
    expect(player1.shipsSunk()).toBe(true);
})