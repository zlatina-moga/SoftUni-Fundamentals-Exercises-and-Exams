function greaterNums(input){
    let sequence = input.split(' ').map(Number);
    let sum = 0;

    for (numbers of sequence){
        sum += numbers;
    }
    let average = sum / sequence.length;
    let greater = sequence.filter(x => x > average);
    greater.sort((a, b) => b - a);

    if (greater.length == 0){
        console.log('No');
    } else {
        console.log(greater.slice(0, 5).join(' '))
    }
}
