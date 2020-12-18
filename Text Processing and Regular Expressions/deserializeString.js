function solve(input) {
    let line;
    let arr = [];
 
    while ((line = input.shift()) != 'end') {
        let char = line.split(':')[0];
        let indeces = line.split(':')[1].split('/').map(Number);
        
        for (const ind of indeces) {
            arr[ind] = char;
        }
    }
 
    console.log(arr.join(''));
}