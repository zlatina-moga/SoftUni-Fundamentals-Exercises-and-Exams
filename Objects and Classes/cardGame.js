function solve (arr) {
    const colors = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }
    const points = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }

    let players = {};
    for (let line of arr){
        let [name, hand] = line.split(': ');
        hand = hand.split(', ');

        if (!players.hasOwnProperty(name)){
            players[name] = [];
        }
        players[name].push(...hand);
    }

    Object.keys(players).forEach(element => {
        let cardsArr = new Set(players[element]);
        let total = 0;
        Array.from(cardsArr).forEach(card => {
            let elements = card.split('');
            let color = elements.pop();
            let cardNum = elements.join('')
            if (isNaN(cardNum)){
                cardNum = points[cardNum];
            }
            total += colors[color] * Number(cardNum)
        })
        console.log(`${element}: ${total}`)
    });  
}