function solve(arr){
    let items = {};

    for (let i = 0; i < arr.length; i+= 2){
        let item = arr[i]
        if (items.hasOwnProperty(item)){
            items[item] += Number(arr[i + 1])
        } else {
            items[item] = Number(arr[i + 1])
        }
        
    }

    let result = Object.entries(items);
    for (let [item, qty] of result){
        console.log(`${item} -> ${qty}`)
    }
}