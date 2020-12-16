function solve(arr){
    let dictionary = {};

    arr.forEach(element => {
        element = JSON.parse(element);
        let tuple = Object.entries(element);
        let term = tuple[0][0];
        let definition = tuple[0][1];
        dictionary[term] = definition;
    });
    Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0])).forEach(e => {
        console.log(`Term: ${e[0]} => Definition: ${e[1]}`)
    })
}