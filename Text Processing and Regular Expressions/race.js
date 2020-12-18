function solve(arr){
    let names = arr.shift().split(', ');
    let racers = {};
    names.forEach(name => {
        racers[name] = 0;
    });

    for (const line of arr){
        const regexName = /[A-Za-z]/g;
        let match = line.match(regexName);
        let name = match.join('')
        if (racers.hasOwnProperty(name)){
            const regex = /[0-9]/g;
            let digits = line.match(regex).map(Number).reduce((a, b) => a+b)
            
            racers[name] += digits;
        }
    }
    let sorted = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);
    console.log(`1st place: ${sorted[0]}`);
    console.log(`2nd place: ${sorted[1]}`);
    console.log(`3rd place: ${sorted[2]}`)
}