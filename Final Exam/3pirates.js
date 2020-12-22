function solve(arr){
    let cities = {};
    let sail = arr.indexOf('Sail');

    for (let i = 0; i < sail; i++){
        let [city, population, gold] = arr.shift().split('||');
        population = Number(population);
        gold = Number(gold);
        if (cities.hasOwnProperty(city)){
            cities[city].population += population;
            cities[city].gold += gold;
        } else {
            cities[city] = {population, gold};
        }
        
    }
    
    let command = arr.shift();
    while (command !== 'End'){
        let [action, cityName, firstArgument, secondArgument] = command.split('=>');

        switch (action){
            case 'Plunder': {
                let people = Number(firstArgument);
                let gold = Number(secondArgument);
                console.log(`${cityName} plundered! ${gold} gold stolen, ${people} citizens killed.`)
               
                cities[cityName].population -= people;
                cities[cityName].gold -= gold;
                if (cities[cityName].population <= 0 || cities[cityName].gold <= 0){
                    console.log(`${cityName} has been wiped off the map!`)
                    delete cities[cityName];                  
                }              
                break;
            }

            case 'Prosper': {
                let gold = Number(firstArgument);
                if (gold < 0){
                    console.log(`Gold added cannot be a negative number!`)
                } else {
                    cities[cityName].gold += gold;
                    console.log(`${gold} gold added to the city treasury. ${cityName} now has ${cities[cityName].gold} gold.`)
                }
                break;
            }
        }
        command = arr.shift();
    }

    let sorted = Object.entries(cities);
    sorted.sort((a, b) => {
        if (b[1].gold == a[1].gold){
            return a[0].localeCompare(b[0])
        } else {
            return b[1].gold - a[1].gold
        }
    })

    if (sorted.length > 0){
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
        for (const kvp of sorted){
            console.log(`${kvp[0]} -> Population: ${kvp[1].population} citizens, Gold: ${kvp[1].gold} kg`)
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }
        
}

//solve(['Tortuga||345000||1250', 'Santo Domingo||240000||630', 'Havana||410000||1100','Sail', 'Plunder=>Tortuga=>75000=>380', 'Prosper=>Santo Domingo=>180', 'End'])
solve(['Nassau||95000||1000', 'San Juan||930000||1250', 'Campeche||270000||690', 'Port Royal||320000||1000', 'Port Royal||100000||2000', 'Sail', 'Prosper=>Port Royal=>-200', 'Plunder=>Nassau=>94000=>750', 'Plunder=>Nassau=>1000=>150', 'Plunder=>Campeche=>150000=>690', 'End'])