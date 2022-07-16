export default function createShip(length){

    const placesHit = [];
    for (let i = 0; i < length; i++){
        placesHit.push('not hit');
    }

    return {
        length: length,
        placesHit: placesHit,
        isSunk(){
            let sunk = true;
            if (placesHit.includes('not hit')){
                sunk = false;
            }
            return sunk
        },
        attack(position){
            if (position < placesHit.length){
                placesHit[position] = 'hit';
            }
        }
    }
}