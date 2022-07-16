import createShip from "./createShip";

test('create ship with a length of 4', () => {
    const ship = createShip(4);
    expect(ship.length).toBe(4);
})

test('create ship 3 spots that are not hit', () => {
    const ship = createShip(3);
    expect(ship.placesHit).toEqual(["not hit", "not hit", "not hit"]);
})

test('check that ship is not sunk by default', () => {
    const ship = createShip(2);
    expect(ship.isSunk()).toBe(false);
})

test('check attack function', () => {
    const ship = createShip(1);
    expect(ship.attack(0)).toEqual();
    expect(ship.placesHit).toEqual(["hit"]);
    expect(ship.isSunk()).toBe(true);
})