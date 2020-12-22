function solve(arr){
    let list = {};
    let command = arr.shift();
    let unlikedMeals = 0;

    while (command != 'Stop'){
        let [rate, guest, meal] = command.split('-');
        switch (rate){
            case 'Like': {
                if (!list.hasOwnProperty(guest)){
                    list[guest] = {meal: [meal]};
                } else if (!list[guest].meal.includes(meal)){
                    list[guest].meal.push(meal)
                }
                break
            }
            case 'Unlike': {
                if (!list.hasOwnProperty(guest)){
                    console.log(`${guest} is not at the party.`)
                } else if (list[guest].meal.includes(meal)){
                    console.log(`${guest} doesn't like the ${meal}.`)
                    let idx = list[guest].meal.indexOf(meal)
                    list[guest].meal.splice(idx, 1)
                    unlikedMeals++                
                } else {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`)
                }
                break
            }
        }
        command = arr.shift()
    }

    let sorted = Object.entries(list).sort((a, b) => {
        if (b[1].meal.length === a[1].meal.length){
            return a[0].localeCompare(b[0])
        } else {
            return b[1].meal.length - a[1].meal.length
        }
    })

    for (let kvp of sorted){
        console.log(`${kvp[0]}: ${kvp[1].meal.join(', ')}`)
    }
    console.log(`Unliked meals: ${unlikedMeals}`)
}

//solve(['Like-Krisi-shrimps', 'Like-Krisi-soup', 'Like-Misho-salad', 'Like-Pena-dessert', 'Stop'])
solve(['Like-Krisi-shrimps', 'Unlike-Vili-carp', 'Unlike-Krisi-salad', 'Unlike-Krisi-shrimps', 'Stop'])