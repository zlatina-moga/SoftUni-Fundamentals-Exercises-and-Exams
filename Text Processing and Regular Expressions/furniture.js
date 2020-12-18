function solve(input) {

    let result = `Bought furniture:\n`;
    let total = 0;   

    for (const line of input){
        let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<qty>[\d]+)/g;
        let match = pattern.exec(line);
        if (match) {
            result += match.groups.furniture + '\n';
            total += Number(match.groups.price) * Number(match.groups.qty) 
        }
    }
    result += `Total money spend: ${total.toFixed(2)}`
    console.log(result)
}