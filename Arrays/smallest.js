function compareNums(arr){
    arr.sort((a, b) => a-b);
    let smallest = arr.slice(0, 2);
    return smallest.join(' ')
}

