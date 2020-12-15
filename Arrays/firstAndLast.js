function firstKlastK(arr){
    let k = arr.shift();
    let firstK = arr.slice(0, k);
    console.log(firstK.join(' '));
    let lastK = arr.slice(-k);
    console.log(lastK.join(' '))
}

