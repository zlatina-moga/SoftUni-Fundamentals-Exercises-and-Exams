function mergeArr(firstArr, secondArr){
    let result = [];
    for(let i = 0; i < firstArr.length; i++) {
        if (i % 2 == 0) {
            let sum = Number(firstArr[i]) + Number(secondArr[i]);
            result.push(sum)
        } else {
            result.push(firstArr[i] + secondArr[i]);
        }
    }
    console.log(result.join(' - '))
}