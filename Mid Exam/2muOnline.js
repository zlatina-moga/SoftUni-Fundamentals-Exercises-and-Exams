function solve(input) {
    let rooms = input.split('|');
    let bestRoom = 0;
    let health = 100;
    let bitcoins = 0;

    for (let i = 0; i < rooms.length; i++){
        bestRoom ++;
        let command = rooms[i].split(' ');
        if (command[0] === 'potion'){       
            if (health + Number(command[1]) > 100){
                console.log(`You healed for ${100 - health} hp.`)
                health = 100;
            } else {
                console.log(`You healed for ${Number(command[1])} hp.`)
                health += Number(command[1]);
            }
            console.log(`Current health: ${health} hp.`);
        }
        else if (command[0] === 'chest'){
            bitcoins += Number(command[1]);
            console.log(`You found ${command[1]} bitcoins.`);
        }
        else {
            health -= Number(command[1]);
            if (health > 0){
                console.log(`You slayed ${command[0]}.`)
            } else {
                console.log(`You died! Killed by ${command[0]}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
    }
    if (health > 0){
        console.log(`You've made it!`)
        console.log(`Bitcoins: ${bitcoins}`)
        console.log(`Health: ${health}`)
    }
}
//solve('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')
solve('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')
