function solve(arr){
    let items = arr.shift();
    let inventory = items.split(', ');
    let commandLine = arr.shift();
    while (commandLine != 'Craft!'){
        let [command, argument] = commandLine.split(' - ');
        switch (command) {
            case 'Collect':
                collectItem(inventory, argument)
                break;
            case 'Drop':
                dropItem(inventory, argument)
                break;
            case 'Combine Items':
                let [oldItem, newItem] = argument.split(':')
                combineItem(inventory, oldItem, newItem)
                break;
            case 'Renew':
                renewItem(inventory, argument)
                break;
        }
        commandLine = arr.shift();
    }
    function collectItem(inventory, item){
        if (!inventory.includes(item)){
            inventory.push(item);
        }
    }
    function dropItem(inventory, item){
        let itemIndex = inventory.indexOf(item);
        if (itemIndex > -1){
            inventory.splice(itemIndex, 1);
        }
    }
    function combineItem(inventory, oldItem, newItem){
        let oldItemIndex = inventory.indexOf(oldItem);
        if (oldItemIndex > -1){
            inventory.splice(oldItemIndex + 1, 0, newItem);
        }
    }

    function renewItem(inventory, item){
        let itemIndex = inventory.indexOf(item);
        if (itemIndex > -1){
            inventory.splice(itemIndex, 1);
            inventory.push(item)
        }
    }
    console.log(inventory.join(', '))
}
//solve(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!'])
solve(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!'])