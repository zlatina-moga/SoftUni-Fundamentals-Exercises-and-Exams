function solve(arr){
    let phonebook = {};

    for (let line of arr){
        [name, number] = line.split(' ');
        phonebook[name] = number;
    }

    for (let key in phonebook){
        console.log(`${key} -> ${phonebook[key]}`)
    }
}