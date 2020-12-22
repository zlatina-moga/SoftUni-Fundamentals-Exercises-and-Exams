function solve(arr){
    let count = Number(arr.shift());
    let list = {};

    for (let i = 0; i < count; i++){
        let [piece, firstArgument, secondArgument] = arr.shift().split('|');
        list[piece] = {firstArgument, secondArgument}
    }

    let command = arr.shift();
    while (command !=='Stop'){
        let [action, pieceName, firstArgument, secondArgument] = command.split('|');
        switch (action){
            case 'Add': {
                if (!list.hasOwnProperty(pieceName)){
                    list[pieceName] = {firstArgument, secondArgument}
                    console.log(`${pieceName} by ${firstArgument} in ${secondArgument} added to the collection!`)
                } else {
                    console.log(`${pieceName} is already in the collection!`)
                }
                break;
            }
            case 'Remove': {
                if (list.hasOwnProperty(pieceName)){
                    delete list[pieceName];
                    console.log(`Successfully removed ${pieceName}!`)
                } else {
                    console.log(`Invalid operation! ${pieceName} does not exist in the collection.`)
                }
                break;
            }
            case 'ChangeKey': {
                if (list.hasOwnProperty(pieceName)){
                    list[pieceName].secondArgument = firstArgument;
                    console.log(`Changed the key of ${pieceName} to ${firstArgument}!`);
                } else {
                    console.log(`Invalid operation! ${pieceName} does not exist in the collection.`)
                }
                break;
            }
        }
        command = arr.shift();
    }

    let sorted = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let kvp of sorted){
        console.log(`${kvp[0]} -> Composer: ${kvp[1].firstArgument}, Key: ${kvp[1].secondArgument}`)
    }
}

//solve(['3', 'Fur Elise|Beethoven|A Minor', 'Moonlight Sonata|Beethoven|C# Minor', 'Clair de Lune|Debussy|C# Minor', 'Add|Sonata No.2|Chopin|B Minor', 'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 'Add|Fur Elise|Beethoven| C# Minor', 'Remove|Clair de Lune', 'ChangeKey|Moonlight Sonata|C#', 'Stop'])
solve(['4', 'Eine kleine Nachtmusik|Mozart|G Major', 'La Campanella|Liszt|G# Minor', 'The Marriage of Figaro|Mozart|G Major', 'Hungarian Dance No.5|Brahms|G Minor', 'Add|Spring|Vivaldi| E Major', 'Remove|The Marriage of Figaro', 'Remove|Turkish March', 'ChangeKey|Spring|C Major', 'Add|Nocturne|Chopin|C# Minor', 'Stop'])