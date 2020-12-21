function solve(arr){
    let initialBooks = arr.shift().split('&');
    
    for (let line of arr){
        let [command, token, tokenTwo] = line.split(' | ');

        if (command === 'Add Book'){
            if (!initialBooks.includes(token)){
                initialBooks.unshift(token)
            }
        } else if (command === 'Take Book'){
            let index = initialBooks.indexOf(token);
            if (index !== -1){
                initialBooks.splice(index, 1)
            }
        } else if (command === 'Swap Books'){
            let indexOne = initialBooks.indexOf(token);
            let indexTwo = initialBooks.indexOf(tokenTwo);
            if (indexOne !== -1 && indexTwo !== -1){
                let temp = initialBooks[indexOne];
                initialBooks[indexOne] = initialBooks[indexTwo];
                initialBooks[indexTwo] = temp
            }
        } else if (command === 'Insert Book'){
            initialBooks.push(token)
        } else if (command === 'Check Book'){
            let index = Number(token);
            if (index > -1 && index < initialBooks.length){
                console.log(initialBooks[index])
            }
        } else if (command === 'Done'){
            break;
        }
    }
    console.log(initialBooks.join(', '))
}

//solve(['Don Quixote&The Great Gatsby&Moby Dick&Hamlet', 'Add Book | The Odyssey', 'Take Book | Don Quixote', "Insert Book | Alice's Adventures in Wonderland", 'Check Book | 3', 'Done'])
solve(['Anna Karenina&Heart of Darkness&Catch-22&The Stranger', 'Add Book | David Copperfield', 'Add Book | One Thousand and One', 'Swap Books | One Thousand and One | Catch-22', 'Take Book | David Copperfield', 'Insert Book | The Stories of Anton Checkhov', 'Check Book | 17', 'Done'])