function solve(arr){
    let register = {}

    for (let line of arr){
        let [direction, carPlate] = line.split(', ');
        if (direction === 'IN'){
            register[carPlate] = 1;
        } else {
            delete register[carPlate]
        }
    }
    
    let sorted = Object.keys(register).sort((a, b) => a.localeCompare(b))
    if (sorted.length > 0) {
        sorted.forEach(element => {
            console.log(`${element}`)
        });
    } else {
        console.log(`Parking Lot is Empty`)
    }
}