function train(arr){
    let wagons = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift());
    for (const command of arr){
        if (command.includes('Add')){
            x = Number(command.split(' ')[1]);
            wagons.push(x)
        } else {
            n = Number(command);
            for (let i = 0; i < wagons.length; i++){
                const element = wagons[i];
                if (element + n <= capacity){
                    wagons[i] += n;
                    break
                }
            }
        }
    }
    console.log(wagons.join(' '))
}