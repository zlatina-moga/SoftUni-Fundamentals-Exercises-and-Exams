function solve(arr){
    arr.shift();
    let pattern = /(!)(?<word>[A-Z][a-z]{2,})\1:\[(?<name>[A-Za-z]{8,})\]/g;

    for (const line of arr){
        let result = '';
        let match = pattern.exec(line);

        if (match){
            for (let element of match.groups.name){
                element = element.charCodeAt()
                if (element >= 65 && element <= 90 ||
                element >= 97 && element <= 122){
                    result += element + ' ';
                }
            }
            console.log(`${match.groups.word}: ${result}`)
        } else {
            console.log('The message is invalid')
        }
    }
}

//solve(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]'])
solve(['3', 'go:[outside]', '!drive!:YourCarToACarWash', '!Watch!:[LordofTheRings]'])