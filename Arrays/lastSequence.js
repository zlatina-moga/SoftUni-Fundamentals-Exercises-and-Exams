function lastKElements(n, k){
    let newArr = [1];
    for (let i = 1; i < n; i++){
        let result = newArr.slice(-k);
        let sum = 0;
        for (el of result){
            sum += el;
        }
        newArr.push(sum);
    }
    console.log(newArr.join(' '));
}