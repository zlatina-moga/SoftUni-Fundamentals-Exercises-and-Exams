function solve(arr){
    let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/gi;
    let travelPoints = 0;
    let destinations = [];
    let match = pattern.exec(arr);
    
    while (match){
        travelPoints += match.groups.destination.length;
        destinations.push(match.groups.destination);
        match = pattern.exec(arr);
    }    
    console.log(`Destinations: ${destinations.join(', ')}`)
    console.log(`Travel Points: ${travelPoints}`)
}

//solve(['=Hawai=/Cyprus/=Invalid?invalid==i5valid=/I5valid/=i='])
solve(['ThisIs some InvalidInput'])