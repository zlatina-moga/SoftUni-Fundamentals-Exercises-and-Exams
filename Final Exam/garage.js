function solve(arr){
    let garage = {};

    for (let line of arr){
        let [num, rest] = line.split(' - ');
        num = Number(num);
        let info = rest.split(': ');

        if (!garage.hasOwnProperty(num)){
            garage[num] = []
            garage[num].push(info.join(' - '))
        } else {
            garage[num].push(info.join(' - '))
        }
    }

    let sorted = Object.keys(garage).sort((a, b) => a - b);
    for (let key of sorted){
        console.log(`Garage № ${key}`);
        garage[key].forEach(element => {
            console.log(`--- ${element}`)
        });
    }
}
solve(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])