function sumEvenNums(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        let numArr = Number(arr[i]);
        if (numArr % 2 == 0){
            sum += numArr
        }
    }
    console.log(sum)
}

