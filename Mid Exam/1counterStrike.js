function solve(arr){
    let energy = Number(arr.shift())
    let battles = 0;

    let command = arr.shift();
    while (energy >= 0){
        if (command === 'End of battle'){
            break
        } else {
            command = Number(command);
        }
        if (energy >= command){
            battles++;
            energy -= command; 
        } else {
            console.log(`Not enough energy! Game ends with ${battles} won battles and ${energy} energy`)
            return
        }           
            
        if (battles % 3 == 0){
            energy += battles
        }     
        
        command = arr.shift();
    }
    console.log(`Won battles: ${battles}. Energy left: ${energy}`)
}

solve(['100', '10', '10', '10', '1', '2', '3', '73', '10'])
//solve(['200', '54', '14', '28', '13', 'End of battle'])