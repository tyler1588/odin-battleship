export default function createShip(length){

    const placesHit = [];
    for (let i = 0; i < length; i++){
        placesHit.push('Not Hit');
    }

    let sunk = true;

    if (placesHit.includes('Not Hit')){
        sunk = false;
    }
    
    return {
        length: length,
        placesHit: placesHit,
        sunk: sunk
    }
}