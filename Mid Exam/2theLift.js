function lift(arr){
    let people = Number(arr[0]);
    let wagons = arr[1].split(' ').map(Number);
    
    while (people !== 0 && isFree(wagons)){
        wagons = wagons.map( w => {
            let n = 4 - w;
            if (n > people){
                n = people;
            }
            people -= n;
            w += n;
            return w;
        })
    }
    if (isFree(wagons)){
        console.log('The lift has empty spots!');
    }
    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`)
    }
    console.log(wagons.join(' '));

    function isFree(array){
        let filtered = array.filter(x => x < 4);
        return filtered.length > 0;
    }
}

