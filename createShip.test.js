import createShip from "./createShip";

test('create ship with a length of 4', () => {
    const ship = createShip(4);
    expect(ship.length).toBe(4);
    expect(ship.placesHit).toEqual(["Not Hit", "Not Hit", "Not Hit", "Not Hit"]);
    expect(ship.sunk).toBe(false);
})