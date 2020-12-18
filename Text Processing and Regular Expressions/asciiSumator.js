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