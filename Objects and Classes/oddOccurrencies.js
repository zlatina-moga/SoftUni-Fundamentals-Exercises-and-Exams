function solve(arr){
    let elements = arr.split(' ').map((el) => el.toLowerCase());
    let map = generateMap(new Set(elements));

    elements.forEach(el => {
        map.set(el, map.get(el) + 1);
    })

    let output = '';

    Array.from(map.entries()).forEach((kvpArr) => {
        let [key, value] = kvpArr;
        if (Number(value) % 2 !== 0){
            output += key + ' ';
        }
    });

    console.log(output)

    function generateMap(set){
        let map = new Map;
        set.forEach(el => {
            map.set(el, 0)
        });
        return map;
    }
}