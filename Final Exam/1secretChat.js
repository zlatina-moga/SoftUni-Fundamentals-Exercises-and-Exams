function solve(arr){
    let message = arr.shift();

    for (let line of arr){
        if (line === 'Reveal'){
            break
        }

        let tokens = line.split(':|:');
        let command = tokens[0];

        switch (command){
            case 'InsertSpace':
                insertSpace(tokens[1]);
                break;
            case 'Reverse':
                reverse(tokens[1]);
                break;
            case 'ChangeAll':
                changeAll(tokens[1], tokens[2]);
                break;
        }
    }
    console.log(`You have a new text message: ${message}`)

    function insertSpace(index){
        let left = message.slice(0, index);
        let right = message.slice(index);
        message = left + ' ' + right;
        console.log(message)
    }

    function reverse(substring){
        if (message.includes(substring)){
            message = message.replace(substring, '');
            let str = substring.split('').reverse().join('')
            message = message.concat(str)
            console.log(message)
        } else {
            console.log('error')
        }
        
    }
    function changeAll(currentChar, nextChar){
        while (message.search(currentChar)!== -1){
            message = message.replace(currentChar, nextChar)
        }
        console.log(message)
    }
}

//solve(['heVVodar!gniV', 'ChangeAll:|:V:|:l', 'Reverse:|:!gnil', 'InsertSpace:|:5', 'Reveal'])
solve(['Hiware?uiy', 'ChangeAll:|:i:|:o', 'Reverse:|:?uoy', 'Reverse:|:jd', 'InsertSpace:|:3', 'InsertSpace:|:7', 'Reveal'])