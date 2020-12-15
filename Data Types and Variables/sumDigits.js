function sumOfNumbers(number) {
    let numberToStr = number.toString();
    let sum = 0;

    for (let i = 0; i < numberToStr.length; i++){
        sum += Number(numberToStr[i]);
    }
    console.log(sum)
}