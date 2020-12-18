function solve (text){
    let result = ''
    for (let i = 0; i < text.length; i++){
        if (text[i] !== text[i + 1]){
            result += text[i]
        }
    }
    console.log(result)
}