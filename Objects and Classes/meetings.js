function solve(arr){
    let meetings = {};
    for (let line of arr){
        [day, name] = line.split(' ');
        if (!meetings.hasOwnProperty(day)){
            meetings[day] = name;
            console.log(`Scheduled for ${day}`)
        } else {
            console.log(`Conflict on ${day}!`)
        }
    }
    for (let key in meetings){
        console.log(`${key} -> ${meetings[key]}`)
    }
}