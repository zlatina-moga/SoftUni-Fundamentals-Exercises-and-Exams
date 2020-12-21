function solve(arr){
    let targetSequence = arr.shift().split(' ').map(Number)

    let command = arr.shift();
    while (command !== 'End'){
        let [action, index, argument] = command.split(' ')
        index = Number(index);
        argument = Number(argument);

        if (action === 'Shoot'){
            if (targetSequence[index]){
                targetSequence[index] -= argument;
                if (targetSequence[index] <= 0){
                    targetSequence.splice(index, 1)
                }
            }
        } else if (action === 'Add'){
            if (index > -1 && index < targetSequence.length){
                targetSequence.splice(index, 0, argument)
            } else {
                console.log(`Invalid placement!`)
            }
        } else if (action === 'Strike'){
            let range = 1 + (argument * 2)
            let startIndex = index - argument;
            let countToEnd = index + argument;
            if (startIndex >= 0 && countToEnd < targetSequence.length){
                targetSequence.splice(startIndex, range);
            } else {
                console.log(`Strike missed!`)
            }
        }
        command = arr.shift();
    }
    console.log(targetSequence.join('|'))
}

//solve(['52 74 23 44 96 110', 'Shoot 5 10', 'Shoot 1 80', 'Strike 2 1', 'Add 22 3', 'End'])
solve(['47 55 85 78 99 20', 'Shoot 1 55', 'Shoot 8 15', 'Strike 2 3', 'Add 0 22', 'Add 2 40', 'Add 2 50', 'End'])