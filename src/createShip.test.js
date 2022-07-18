import createShip from "./createShip";

test('create ship with a length of 4', () => {
    const ship = createShip(4);
    expect(ship.length).toBe(4);
})

test('check that ship is not sunk by default', () => {
    const ship = createShip(2);
    expect(ship.isSunk()).toBe(false);
})

test('check attack function', () => {
    const ship = createShip(1);
    ship.attack();
    expect(ship.isSunk()).toBe(true);
})