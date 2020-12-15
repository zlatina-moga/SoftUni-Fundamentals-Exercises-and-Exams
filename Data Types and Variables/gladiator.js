function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenHelmet = 0;
    let brokenSword = 0;
    let brokenShield = 0;
    let brokenArmor = 0;

    for (i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            brokenHelmet += 1;
        } 
        if (i % 3 == 0) {
            brokenSword += 1;
        } 
        if (i % 2 == 0 && i % 3 == 0) {
            brokenShield += 1;
            if(brokenShield % 2== 0) {
                brokenArmor += 1
            }
        }
    }
    let total = brokenHelmet * helmetPrice + brokenSword * swordPrice + brokenShield * shieldPrice + brokenArmor * armorPrice
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`)
}