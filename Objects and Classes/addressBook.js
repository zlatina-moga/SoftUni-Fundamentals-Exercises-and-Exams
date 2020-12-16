function solve(arr){
    let addressbook = {};

    for (let line of arr){
        [name, address] = line.split(':');
        addressbook[name] = address;
    }
    let entries = Object.entries(addressbook);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of entries){
        console.log(`${name} -> ${address}`)
    }
}