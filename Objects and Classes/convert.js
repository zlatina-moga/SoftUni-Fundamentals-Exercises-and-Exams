function solve(obj){
    let str = JSON.parse(obj);

    for (let key of Object.keys(str)){
        console.log(`${key}: ${str[key]}`)
    }
}