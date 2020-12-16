function solve (arr){
    let storage = {};
    for (let line of arr){
        [product, qty] = line.split(' ');
        qty = Number(qty)
        if (!storage.hasOwnProperty(product)){
            storage[product] = qty;
        } else {
            storage[product] += qty
        }
    }
    for (let key in storage){
        console.log(`${key} -> ${storage[key]}`)
    }
}