function solve(arr){
    let message = arr.shift();

    for (let line of arr){
        if (line === 'Done'){
            break;
        }

        let tokens = line.split(' ');
        let command = tokens[0];

        switch (command){
            case 'Change': {
                change(tokens[1], tokens[2]);
                break;
            }
            case 'Includes': {
                include(tokens[1])
                break
            }
            case 'End': {
                end(tokens[1])
                break
            }
            case 'Uppercase': {
                upper(message)
                break;
            }
            case 'FindIndex': {
                find(tokens[1])
                break
            }
            case 'Cut': {
                cut(Number(tokens[1]), Number(tokens[2]))
                break
            }

        }
    }

    function change(char, replacement){
        while (message.search(char)!== -1){
            message = message.replace(char, replacement)
        }
        console.log(message)
    }
    function include(string){
        if (message.includes(string)){
            console.log('True')
        } else {
            console.log('False')
        }
    }
    function end(string){
        if (message.endsWith(string)){
            console.log('True')
        } else {
            console.log('False')
        }
    }
    function upper(text){
        message = message.toUpperCase();
        console.log(message)
    }
    function find(char){
        let index = message.indexOf(char);
        console.log(index)
    }
    function cut(startIndex, endIndex){
        message = message.slice(startIndex, startIndex+endIndex)
        console.log(message)
    }
}

solve(['//Th1s 1s my str1ng!//', 'Change 1 i', 'Includes string', 'End my', 'Uppercase', 'FindIndex I', 'Cut 5 5', 'Done'])