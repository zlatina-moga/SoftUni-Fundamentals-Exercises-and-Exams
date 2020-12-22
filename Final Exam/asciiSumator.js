function solve(arr){
    let start = arr.shift().charCodeAt();
    let end = arr.shift().charCodeAt();
    let string = arr.pop()
    let sum = 0;

    for (let line of string){
        let char = line.charCodeAt()
        if (char > start && char < end){
            sum += char
        }
        if (char > end && char < start){
            sum += char
        }
    }
    console.log(sum)
}

solve(['.', '@', 'dsg12gr5653feee5'])
//solve(['?', 'E', '@ABCEF'])
//solve(['a', '1', 'jfe392$#@j24ui9ne#@$'])