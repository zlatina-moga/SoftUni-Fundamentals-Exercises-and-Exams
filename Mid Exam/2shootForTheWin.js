function solve(arr){
    let targets = arr.shift().split(' ').map(Number);
    let command = arr.shift()
    let counter = 0;

    while (command !== 'End'){
        command = Number(command)

        if (command < targets.length && targets[command] > -1){
            let target = targets[command]
            targets[command] = -1;

            for (let i = 0; i < targets.length; i++){
                if (targets[i] == -1){
                    continue
                }
                if (target < targets[i]){
                    targets[i] -= target
                } else if (target >= targets[i] && targets[i] > -1){
                    targets[i] += target
                }
            }
            counter++
        }
        
        command = arr.shift()       
    }
    console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`)
}

solve(['30 30 12 60 54 66', '5', '2', '4', '0', 'End'])
//solve(['24 50 36 70', '0', '4', '3', '1', 'End'])
