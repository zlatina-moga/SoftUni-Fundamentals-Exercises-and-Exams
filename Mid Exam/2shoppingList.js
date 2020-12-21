function solve(arr){
    let shoppingList = arr.shift().split('!')

    let command = arr.shift();
    while (command !== 'Go Shopping!'){
        let [action, item, argument] = command.split(' ');
        if (action === 'Urgent'){
            if (!shoppingList.includes(item)){
                shoppingList.unshift(item)
            }
        } else if (action === 'Unnecessary'){
            let index = shoppingList.indexOf(item);
            if (index !== - 1){
                shoppingList.splice(index, 1)
            }
        } else if (action === 'Correct'){
            let index = shoppingList.indexOf(item);
            if (index !== -1){
                shoppingList[index] = argument
            }
        } else if (action === 'Rearrange'){
            let index = shoppingList.indexOf(item);
            if (index !==- 1){
                shoppingList.splice(index, 1)
                shoppingList.push(item)
            }
        }
        command = arr.shift();
    }
    console.log(shoppingList.join(', '))
}

//solve(['Tomatoes!Potatoes!Bread', 'Unnecessary Milk', 'Urgent Tomatoes', 'Go Shopping!'])
solve(['Milk!Pepper!Salt!Water!Banana', 'Urgent Salt', 'Unnecessary Grapes', 'Correct Pepper Onion', 'Rearrange Grapes', 'Correct Tomatoes Potatoes', 'Go Shopping!'])