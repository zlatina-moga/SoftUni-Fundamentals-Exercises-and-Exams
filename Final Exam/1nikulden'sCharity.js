function solve(arr){
    let message = arr.shift();

    for (let line of arr){
        if (line === 'Finish'){
            break
        }

        let tokens = line.split(' ');
        command = tokens[0];

        switch (command){
            case 'Replace': {
                replace(tokens[1], tokens[2]);
                break;
            }
            case 'Cut': {
                cut(Number(tokens[1]), Number(tokens[2]));
                break;
            }
            case 'Make': {
                if (tokens[1] === 'Upper'){
                    makeUpper(message);
                    break;
                } else {
                    makeLower(message);
                    break;
                }
                
            }
            case 'Check': {
                check(tokens[1]);
                break;
            }
            case 'Sum': {
                sum(Number(tokens[1]), Number(tokens[2]));
                break;
            }

        }
    }

    function replace(currentChar, newChar){
        while (message.search(currentChar) != -1){
            message = message.replace(currentChar, newChar)
        }
        console.log(message)
    }
    function cut (startIndex, endIndex){
        if (startIndex > 0 && startIndex < message.length){
            if (endIndex > 0 && endIndex <= message.length){
                let left = message.slice(0, startIndex);
                let right = message.slice(endIndex+1);
                message = left+right;
                console.log(message)
            } else {
                console.log('Invalid indexes!')
            }
        } else {
            console.log('Invalid indexes!')
        }
        
    }
    function makeUpper (text){
        message = message.toUpperCase()
        console.log(message)
    }
    function makeLower (text){
        message = message.toLowerCase();
        console.log(message)
    }
    function check (string) {
        if (message.includes(string)){
            console.log(`Message contains ${string}`)
        } else {
            console.log(`Message doesn't contain ${string}`)
        }
    }
    function sum (startIndex, endIndex) {
        if (startIndex > 0 && startIndex < message.length){
            if (endIndex > 0 && endIndex <= message.length){
                let substr = message.substring(startIndex, endIndex+1);
                let sum = 0;
                for (let i = 0; i < substr.length; i++){
                    sum += substr.charCodeAt(i);
                }
                console.log(sum)
            } else {
                console.log('Invalid indexes!')
            }
        } else {
            console.log('Invalid indexes!')
        }   
    }
}

//solve(['ILikeSharan', 'Replace a e', 'Make Upper', 'Check SHEREN', 'Sum 1 4', 'Cut 1 4', 'Finish'])
solve(['HappyNameDay', 'Replace p r', 'Make Lower', 'Cut 2 23', 'Sum -2 2', 'Finish'])