function solve(arr){
    let list = arr.shift().split(' ');
    let commands = Number(arr.shift());

    let line = arr.shift();
    while (commands > 0){
        commands--
        let [action, firstArgument, secondArgument] = line.split(' ');

        if (action == 'Include'){
            list.push(firstArgument)
        }
        if (action == 'Remove'){
            secondArgument = Number(secondArgument);
            if (secondArgument < list.length){
                if (firstArgument == 'first'){
                    list.splice(0, secondArgument)
                } else if (firstArgument == 'last'){
                    list.splice(-1, secondArgument)
                }
            }
        }
        if (action == 'Prefer'){
            let firstIndex = Number(firstArgument);
            let secondIndex = Number(secondArgument);
            if (list.includes(list[firstIndex]) && list.includes(list[secondIndex])){
                let temp = list[firstIndex];
                list[firstIndex] = list[secondIndex];
                list[secondIndex] = temp
            }
        }
        if (action == 'Reverse'){
            list = list.reverse()
        }
        line = arr.shift();
    }
    console.log(`Coffees:\n${list.join(' ')}`)
}

//solve(['Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica', '3', 'Include OrdinaryCoffee', 'Remove first 1', 'Prefer 4 1'])
solve(['Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee', '5', 'Include TurkishCoffee', 'Remove first 2', 'Remove last 1', 'Prefer 3 1', 'Reverse'])
//solve(['Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee', '5', 'Include OrdinaryCoffee', 'Remove first 1', 'Prefer 0 1', 'Prefer 3 1', 'Reverse'])