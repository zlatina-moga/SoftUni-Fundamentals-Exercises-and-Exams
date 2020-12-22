function solve(arr){
    let heroes = {};
    let heroCount = Number(arr.shift());

    for (let i = 0; i < heroCount; i++){
        let [name, hitPoints, manaPoints] = arr.shift().split(' ');
        hitPoints = Number(hitPoints);
        manaPoints = Number(manaPoints);
        heroes[name] = {hitPoints, manaPoints};
    }

    let command = arr.shift();

    while (command !== 'End'){
        let [action, heroName, firstArgument, secondArgument] = command.split(' - ');

        switch (action) {
            case 'CastSpell': {
                let neededMP = Number(firstArgument);
                if (heroes[heroName].manaPoints >= neededMP){
                    heroes[heroName].manaPoints -= neededMP;
                    console.log(`${heroName} has successfully cast ${secondArgument} and now has ${heroes[heroName].manaPoints} MP!`)
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${secondArgument}!`)
                }
                break;
            }

            case 'TakeDamage': {
                let damage = Number(firstArgument);
                heroes[heroName].hitPoints -= damage;
                if (heroes[heroName].hitPoints > 0){
                    console.log(`${heroName} was hit for ${damage} HP by ${secondArgument} and now has ${heroes[heroName].hitPoints} HP left!`)
                } else {
                    console.log(`${heroName} has been killed by ${secondArgument}!`)
                    delete heroes[heroName];
                }
                break;
            }
                
            case 'Recharge':{
                let amount = Number(firstArgument);
                if (heroes[heroName].manaPoints + amount > 200){
                    console.log(`${heroName} recharged for ${200 - heroes[heroName].manaPoints} MP!`);
                    heroes[heroName].manaPoints = 200;
                } else {
                    console.log(`${heroName} recharged for ${amount} MP!`)
                    heroes[heroName].manaPoints += amount;
                }
                break;
            }
                
            case 'Heal':{
                let amount = Number(firstArgument);
                if (heroes[heroName].hitPoints + amount > 100){
                    console.log(`${heroName} healed for ${100 - heroes[heroName].hitPoints} HP!`)
                    heroes[heroName].hitPoints = 100;
                } else {
                    console.log(`${heroName} healed for ${amount} HP!`)
                    heroes[heroName].hitPoints += amount;            
                }
                break;
            }
        }
        command = arr.shift();
    }

    let sorted = Object.entries(heroes).sort((a, b) => {
        if (b[1].hitPoints == a[1].hitPoints){
            return a[0].localeCompare(b[0])
        } else {
            return b[1].hitPoints - a[1].hitPoints
        }
    })

    for (const kvp of sorted){
        console.log(`${kvp[0]}\n  HP: ${kvp[1].hitPoints}\n  MP: ${kvp[1].manaPoints}`)
    }
}

solve(['4', 'Adela 90 150', 'SirMullich 70 40', 'Ivor 1 111', 'Tyris 94 61', 'Heal - SirMullich - 50', 'Recharge - Adela - 100', 'CastSpell - Tyris - 1000 - Fireball', 'TakeDamage - Tyris - 99 - Fireball', 'TakeDamage - Ivor - 3 - Mosquito', 'End'])