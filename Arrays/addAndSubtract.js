function addOrNo(arr){
    let firstSum = 0;
    for (let i of arr) {
        firstSum += i;
    }
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
    }
    let secondSum = 0;
    for (let i of arr) {
        secondSum += i
    }
    console.log(arr)
    console.log(firstSum)
    console.log(secondSum)
}