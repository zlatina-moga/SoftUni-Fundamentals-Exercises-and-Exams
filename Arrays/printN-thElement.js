function elements(arr){
    let step = arr.pop();
    let newArr = [];
    for (let i in arr){
        if (i % step === 0){
            newArr.push(arr[i])
        }
    }
    console.log(newArr.join(' '))
}