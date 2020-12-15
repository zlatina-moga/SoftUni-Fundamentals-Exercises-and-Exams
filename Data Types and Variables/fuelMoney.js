function fuelMoney(distance, passengers, price) {
    fuelNeeded = (distance / 100) * 7;
    fuelNeeded += passengers * 0.1;
    let money = fuelNeeded * price;
    console.log(`Needed money for that trip is ${money}lv.`)
}

