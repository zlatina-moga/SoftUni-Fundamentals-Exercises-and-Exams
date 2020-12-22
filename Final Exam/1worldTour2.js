function solve(arr){
    let stops = arr.shift();

    for (let line of arr){
        if (line === 'Travel'){
            console.log(`Ready for world tour! Planned stops: ${stops}`)
            break;
        }
        let tokens = line.split(':');
        let command = tokens[0];

        switch(command){
            case 'Add Stop': {
                addStop(Number(tokens[1]), tokens[2]);
                break;
            }
            case 'Remove Stop': {
                removeStop(Number(tokens[1]),Number(tokens[2]))
                break;
            }
            case 'Switch': {
                switchf(tokens[1], tokens[2])
            }
        }
    }
    function addStop(index, string){
        if (isValid(index)){
            let left = stops.slice(0, index);
            let right = stops.slice(index)
            stops = left+string+right;
        }
        console.log(stops)
    }
    function removeStop(startIndex, endindex){
        if (isValid(startIndex) && isValid(endindex)){
            let left = stops.slice(0, startIndex);
            let right = stops.slice(endindex+1);
            stops = left+right
        }
        console.log(stops)
    }
    function switchf(oldString, newString){
        while (stops.search(oldString) != -1){
            stops = stops.replace(oldString, newString)
            break;
        }
        console.log(stops)
    }

    function isValid(index){
        return index >= 0 && index < stops.length
    }
}

solve(['Hawai::Cyprys-Greece', 'Add Stop:7:Rome', 'Remove Stop:11:16', 'Switch:Hawai:Bulgaria', 'Travel'])