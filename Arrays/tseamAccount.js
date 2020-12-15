function solve(arr){
    let games = arr.shift().split(' ');

    let command = arr.shift();
    while (command !== 'Play!'){
        let [action, game] = command.split(' ');
        if (action === 'Install'){
            if (!games.includes(game)){
                games.push(game)
            }
        } else if (action === 'Uninstall'){
            let index = games.indexOf(game);
            if (index !== -1){
                games.splice(index, 1)
            }
        } else if (action === 'Update'){
            let index = games.indexOf(game);
            if (index !== -1){
                games.splice(index, 1)
                games.push(game)
            }
        } else if (action === 'Expansion'){
            let expansion = game.split('-')
            let index = games.indexOf(expansion[0]);
            let addition = `${expansion[0]}:${expansion[1]}`
            if (index !== -1){
                games.splice(index + 1, 0, addition)
            }
        }
        command = arr.shift();
    }
    console.log(games.join(' '))
}
//solve(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!'])
