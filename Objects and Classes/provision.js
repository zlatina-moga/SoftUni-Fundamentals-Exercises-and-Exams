function solve(arrStock, arrOrdered){
    let shop = {};
    for (let i = 0; i < arrStock.length; i+=2){
        const element = arrStock[i];
        shop[element] = Number(arrStock[i+1]);       
    }
    
    for (let i = 0; i < arrOrdered.length; i+=2){
        const element = arrOrdered[i];
        if (shop.hasOwnProperty(element)){
            shop[element] += Number(arrOrdered[i+1])
        } else {
            shop[element] = Number(arrOrdered[i+1]); 
        }
    }
    Object.entries(shop).forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`)
    });
}