function solve([input]){
    let pattern = /\+359([ \-]|)2\1\d{3}\1\d{4}\b/g;
    let result = input.match(pattern);
    console.log(result.join(', '))
}