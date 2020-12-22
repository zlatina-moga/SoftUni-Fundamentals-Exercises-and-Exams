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


solve(['a:0/3/5/11', 'v:1/4', 'j:2', 'm:6/9/15', 's:7/13', 'd:8/14', 'c:10', 'l:12', 'end'])