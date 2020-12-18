function solve(arr){
    let str = arr.shift();
    let command = arr.pop()
    let sum = 0;

    for (let i = 0; i < str.length; i++){
        let letter = str[i].charCodeAt();
        if (command === 'LOWERCASE'){
            if(letter >= 97 && letter <= 122){
                sum += letter
            }
        } else {
            if(letter >= 65 && letter <= 90){
                sum += letter
            } 
        }
    }

    console.log(`The total sum is: ${sum}`)
}