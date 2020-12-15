function sorting(input){
    let result = [];
    array = input.sort((a, b) => a - b);
    while(array.length !== 0){
      result.push(array[array.length-1]) && array.pop();
      result.push(array[0]) && array.shift();
    }
 console.log(result.join(' '));
 }