function solve(words, text){
    words = words.split(', ');
    words.forEach(word => {
        let element = '*'.repeat(word.length);
        text = text.replace(element, word)
    });
    console.log(text)
}