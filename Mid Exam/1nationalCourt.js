function solve(arr){
    let [first, second, third, people] = arr.map(Number)
    let efficiency = first+second+third;
    let hour = 0;

    while (people > 0){
        hour++
        if (hour % 4 !== 0){
            people -= efficiency
        }
    }
    console.log(`Time needed: ${hour}h.`)
}

//solve(['5', '6', '4', '20'])
solve(['1', '2', '3', '45'])