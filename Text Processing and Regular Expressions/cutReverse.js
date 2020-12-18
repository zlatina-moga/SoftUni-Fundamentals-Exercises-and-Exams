function solve(text){
    let half = text.length/ 2;
    let leftHalf = text.slice(0, half).split('').reverse().join('')
    let rightHalf = text.slice(half).split('').reverse().join('')
    console.log(leftHalf)
    console.log(rightHalf) 
}