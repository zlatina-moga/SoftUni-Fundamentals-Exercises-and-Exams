function solve(arr){
    let capacity = Number(arr.shift());
    let users = {};

    let command = arr.shift()
    while (command !== 'Statistics'){
        let [action, name, firstArgument, secondArgument] = command.split('=');

        switch (action){
            case 'Add': {
                if (!users.hasOwnProperty(name)){
                    let sent = Number(firstArgument);
                    let received = Number(secondArgument)
                    users[name] = {sent, received}
                }
                break
            }

            case 'Message': {
                if (users.hasOwnProperty(name) && users.hasOwnProperty(firstArgument)){
                    users[name].sent += 1;
                    users[firstArgument].received += 1;

                    if (users[name].sent +  users[name].received >= capacity){
                        console.log(`${name} reached the capacity!`)
                        delete users[name]
                    }

                    if (users[firstArgument].received + users[firstArgument].sent >= capacity){
                        console.log(`${firstArgument} reached the capacity!`)
                        delete users[firstArgument]
                    }
                }
               break
            } 

            case 'Empty': {
                if (users.hasOwnProperty(name)){
                    delete users[name]
                }
                if (name === 'All'){
                    users = null;
                    users = {}
                }
                break
            }
        }
        command = arr.shift()
    }

    let sorted = Object.entries(users).sort((a, b) => {
        if (b[1].received == a[1].received){
            return a[0].localeCompare(b[0])
        } else {
            return b[1].received - a[1].received           
        }
    })

    console.log(`Users count: ${sorted.length}`)
    for (let kvp of sorted){
        console.log(`${kvp[0]} - ${kvp[1].sent+kvp[1].received}`)
    }
}

//solve(['10', 'Add=Mark=5=4', 'Add=Clark=3=5', 'Add=Berg=9=0', 'Add=Kevin=0=0', 'Message=Berg=Kevin', 'Statistics'])
//solve(['20', 'Add=Mark=3=9', 'Add=Berry=5=5', 'Add=Clark=4=0', 'Empty=Berry', 'Add=Blake=9=3', 'Add=Michael=3=9', 'Add=Amy=9=9', 'Message=Blake=Amy', 'Message=Michael=Amy', 'Statistics'])
solve(['12', 'Add=Bonnie=3=5', 'Add=Johny=4=4', 'Empty=All', 'Add=Bonnie=3=3', 'Statistics'])