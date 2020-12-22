function solve(arr){
    let text = arr[0];
    let pattern = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
    let regex = /\d/g;
    
    let coolnessMatch = text.match(regex);
    coolnessMatch = coolnessMatch.map(Number);
    let coolnessThreshold = 1;
    coolnessMatch.forEach(x => coolnessThreshold *= x);

    let matches = text.match(pattern);
    console.log('Cool threshold: ' + coolnessThreshold);
    console.log(matches.length + ' emojis found in the text. The cool ones are:')

    for (let line of matches){
        let word = line.slice(2, -2);
        let coolFactor = 0;

        for (let i = 0; i < word.length; i++){
            coolFactor += word.charCodeAt(i)
        }
        if (coolFactor > coolnessThreshold){
            console.log(line)
        }
    }
}

solve(['In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 ""Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'])