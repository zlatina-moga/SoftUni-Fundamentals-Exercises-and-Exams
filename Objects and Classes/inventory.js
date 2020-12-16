function solve(arr){
    let heroes = [];

    arr.forEach(element => {
        let tokens = element.split(' / ');
        const name = tokens[0];
        const level = Number(tokens[1]);
        const items = tokens[2].split(', ').sort((a, b) => a.localeCompare(b))

        heroes.push({name, level, items});
    });   
    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(', ')}`)
    })
}

