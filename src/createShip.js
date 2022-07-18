export default function createShip(length){
    let timesHit = 0;
    return {
        length: length,
        name: 'ship',
        isSunk(){
            let sunk = false;
            if (timesHit === length){
                sunk = true;
            }
            return sunk
        },
        attack(){
            if (timesHit <= length){
                timesHit++;
            }
        }
    }
}