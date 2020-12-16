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