function solve(input, word){
    
    let index = input.indexOf(word);
    let count = 0;
    while (index != - 1){
        count++;
        index = input.indexOf(word, index+word.length)
    }
    console.log(count)
}