function products(arr){
    let counter = 0;
    let sorted = arr.sort();
    for (let i = 0; i < sorted.length; i++){
        counter += 1
        console.log(`${counter}.${sorted[i]}`)
    }
    
}

