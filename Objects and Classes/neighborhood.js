function solve(arr){
    let list = {};
    let totalN = arr.shift().split(', ').forEach(str => {
        list[str] = [];
    });
    
    for (let line of arr){
        let [street, name] = line.split(' - ');
        if (list.hasOwnProperty(street)){
            list[street].push(name)
        }   
    }
    let temp = Object.entries(list);
    temp.sort((a, b) => {
        return b[1].length - a[1].length
    });

    for (let [str, res] of temp){
        console.log(`${str}: ${res.length}`);
        res.forEach(person => console.log(`--${person}`))
    }
}