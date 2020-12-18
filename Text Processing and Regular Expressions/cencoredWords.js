function solve(input, word){
    console.log(input.split(word).join('*'.repeat(word.length)))
}