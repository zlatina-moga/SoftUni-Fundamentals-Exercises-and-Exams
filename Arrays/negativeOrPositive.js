function negativeOrPositive(arr){
    let newArr = [];

    for (let i of arr) {
        if (i < 0){
            newArr.unshift(i);
        } else {
            newArr.push(i);
        }
    }
    for (let i of newArr){
        console.log(i);
    }
}