function oddNums(arr){
    let newArr = [];
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 1){
            newArr.push(arr[i]);
        }
    }
    for (let num of newArr){
        num *= 2
        result.push(num)
    }
    console.log(result.reverse().join(' '))
}