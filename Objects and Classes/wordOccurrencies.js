function solve(arr){
    let occurencies = {};
    for (let line of arr){
        let word = line.split(' ');
        if (occurencies.hasOwnProperty(word)){
            occurencies[word] += 1
        } else {
            occurencies[word] = 1
        }
    }
    let sorted = Object.entries(occurencies);
    sorted.sort((a, b) =>b[1] - a[1]);
    
    for (let [el, time]of sorted){
        console.log(`${el} -> ${time} times`)
    }
    
}