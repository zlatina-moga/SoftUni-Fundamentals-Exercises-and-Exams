function solve(word, text){
    let newWord = word.toLowerCase();
    text = text.toLowerCase();
    
    if (text.split(' ').includes(newWord)){
        console.log(newWord)
    } else {
        console.log(`${word} not found!`)
    }
    
}