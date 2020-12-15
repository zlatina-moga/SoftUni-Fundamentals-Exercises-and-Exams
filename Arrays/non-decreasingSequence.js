function solve(arr){
    let result = [arr[0]]
    for (let i = 0; i < arr.length; i++){
        let current = arr[i]
        if (current > arr[i-1] && current > arr[0]){
            result.push(arr[i])
        }
    }
    console.log(result.join(' '))
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24])
//solve([1, 2, 3, 4])
//solve([20, 3, 2, 15, 6, 1])