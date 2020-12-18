function solve(text){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let validNames = [];
    let validName = null;

    while((validName = pattern.exec(text)) !== null){
        validNames.push(validName[0])
    }
    console.log(validNames.join(' '))
}