function reception (arr){
    let [eff1, eff2, eff3, students] = arr.map(Number);
    let totalEff = eff1+eff2+eff3;
    let hour = 0;

    while (students > 0){
        hour++
        if (hour % 4 != 0){
            students -= totalEff;
        }  
    }
    console.log(`Time needed: ${hour}h.`)
}


reception(['5', '6', '4', '20'])