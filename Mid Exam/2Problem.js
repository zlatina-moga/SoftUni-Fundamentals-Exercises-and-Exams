function solve(arr){
    let coffeeList = arr.shift().split(' ');
    let numOfCommands = Number(arr.shift());
    let counter = 0;

    for (let line of arr){
        counter ++;
        if (counter > numOfCommands){
            break;
        }

        let [action, firstArgument, secondArgument] = line.split(' ');

        if (action === 'Include'){
            coffeeList.push(firstArgument)
        } else if (action === 'Remove'){
            secondArgument = Number(secondArgument)
            if (secondArgument <= coffeeList.length){
                if (firstArgument === 'first'){            
                    coffeeList.splice(0, secondArgument)
                } else if (firstArgument === 'last'){
                    coffeeList.splice(-1, secondArgument)
                }
            }
        } else if (action === 'Prefer'){
            firstArgument = Number(firstArgument);
            secondArgument = Number(secondArgument);
            if (coffeeList.includes(coffeeList[firstArgument]) && coffeeList.includes(coffeeList[secondArgument])){
                let temp = coffeeList[firstArgument];
                coffeeList[firstArgument] = coffeeList[secondArgument];
                coffeeList[secondArgument] = temp                
            }
        } else if (action === 'Reverse'){
            coffeeList.reverse()
        }
    }
    console.log('Coffees:')
    console.log(`${coffeeList.join(' ')}`)
}

//solve(['Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee', '5', 'Include TurkishCoffee', 'Remove first 2', 'Remove last 1', 'Prefer 3 1', 'Reverse'])

//solve(['Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee', '5', 'Include OrdinaryCoffee', 'Remove first 1', 'Prefer 0 1', 'Prefer 3 1', 'Reverse'])

solve(['Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica', '3', 'Include OrdinaryCoffee', 'Remove first 1', 'Prefer 4 1'])