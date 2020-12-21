function nextLevel(arr){
    let experienceNeeded = arr.shift();
    let battles = arr[0];
    let experience = 0;
    let currentBattle = 0;
    let battleCounter = 0;
    let needed = 0;
 
    for (let i = 1; i <= battles; i++){
        currentBattle = arr[i];
        experience += arr[i];
 
        if (i % 3 == 0){
            experience += currentBattle * 0.15;
        }
        if (i % 5 == 0){
            experience -= currentBattle * 0.1;
        }
        if (i % 15 == 0){
            experience += currentBattle * 0.05;
        }
        battleCounter += 1;
 
        if (experience >= experienceNeeded){
            break;
        }
    }
    if (experience >= experienceNeeded){
        console.log(`Player successfully collected his needed experience for ${battleCounter} battles.`)
    } else {
        needed = experienceNeeded-experience;
        console.log(`Player was not able to collect the needed experience, ${needed.toFixed(2)} more needed.`)
    }
}