function solve(input){
    let obj = getWantedWords(input);

    input.slice(1).forEach(word => {
        if (Object.keys(obj).includes(word)){
            obj[word]++
        }
    })

    for (let key of Object.keys(obj).sort((a, b) => obj[b] - obj[a])){
        console.log(`${key} - ${obj[key]}`)
    }

    function getWantedWords(arr) {
        let obj = {};
        arr[0].split(' ').forEach(word => {
            obj[word] = 0;
        });
        return obj;
    }
}