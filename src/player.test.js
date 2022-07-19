import player from "./player";

test('computer player has a game board', () => {
    const player1 = player('computer');
    expect(player1.board[0][0]).toEqual('');
})

test('computer player board can receive attack', () => {
    const player1 = player('computer');
    player1.attack(0,0);
    expect(player1.attack(0,0)).toEqual('already attacked');
    expect(player1.board[0][0]).toEqual('miss');
})

test('computer player board can place a ship', () => {
    const player1 = player('computer');
    player1.placeShip(0,0,3);
    expect(player1.board[0][0].length).toBe(3);
})

test('computer player ship can take an attack', () => {
    const player1 = player('computer');
    player1.placeShip(0,0,1);
    expect(player1.shipsSunk()).toBe(false);
    player1.attack(0,0);
    expect(player1.shipsSunk()).toBe(true);
})

test('human player has a game board', () => {
    const player1 = player('human');
    expect(player1.board[0][0]).toEqual('');
})

test('human player board can receive attack', () => {
    const player1 = player('human');
    expect(player1.attack()[0]).toEqual('miss');
})