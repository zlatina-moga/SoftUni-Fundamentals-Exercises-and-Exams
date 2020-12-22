function solve(input){
    let points = 0;
    let pattern = /(=|\/)[A-Z][A-Za-z]{2,}\1/gi;
    let travel =[];

    if (pattern.test(input)) {
        let destinations = input.match(pattern);
        
        for (let i = 0; i < destinations.length; i++){
            let line = destinations[i].slice(1, -1);
            travel.push(line)
            points += line.length;
        }
    }
    
    console.log(`Destinations: ${travel.join(', ')}`);
    console.log(`Travel Points: ${points}`)
}

solve(['=Hawai=/Cyprus/=Invalid?invalid==i5valid=/I5valid/=i='])
//solve(['ThisIs some InvalidInput'])

