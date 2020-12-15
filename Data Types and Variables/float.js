function intOrFloat(num1, num2, num3) {
    let sum = num1+num2+num3;
    let sumToInt = Math.trunc(sum)
    if (sum === sumToInt) {
        console.log(`${sum} - Integer`)
    } else {
        console.log(`${sum} - Float`)
    }
}