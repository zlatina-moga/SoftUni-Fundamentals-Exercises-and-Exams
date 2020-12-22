function solve(arr){
    let activationKey = arr.shift();
    for (let line of arr){
        if (line == 'Generate'){
            break;
        }

        let tokens = line.split('>>>')
        let command = tokens[0];

        switch (command){
            case 'Contains':
                contain(tokens[1])
                break;

            case 'Flip':
                if (tokens[1] == 'Upper'){
                    flipUp(tokens[2], tokens[3])
                } 
                if (tokens[1] == 'Lower'){
                    flipLow(tokens[2], tokens[3])
                } 
                break;

            case 'Slice':
                slice(tokens[1], tokens[2])
                break;
        }
    }

    console.log(`Your activation key is: ${activationKey}`)

    function contain(substring){
        if (activationKey.includes(substring)){
            console.log(`${activationKey} contains ${substring}`)
        } else {
            console.log('Substring not found!')
        }
    }
    function flipUp(arg1, arg2){
        let left = activationKey.slice(0, arg1);
        let right = activationKey.slice(arg2)
        let middle = activationKey.substring(arg1, arg2).toUpperCase();
        activationKey = left+middle+right;
        console.log(activationKey)    
        
    }
    function flipLow(first, second){
        let left = activationKey.slice(0, first);
        let right = activationKey.slice(second)
        let middle = activationKey.substring(first, second).toLowerCase();
        activationKey = left+middle+right;
        console.log(activationKey)
    }
    function slice(startIndex, endIndex){
        let left = activationKey.slice(0, startIndex);
        let right = activationKey.slice(endIndex);
        activationKey = left+right;
        console.log(activationKey)
    }
}

//solve(['abcdefghijklmnopqrstuvwxyz','Slice>>>2>>>6', 'Flip>>>Upper>>>3>>>14','Flip>>>Lower>>>5>>>7', 'Contains>>>def','Contains>>>deF', 'Generate'])

solve(['134softsf5ftuni2020rockz42', 'Slice>>>3>>>7', 'Contains>>>-rock','Contains>>>-uni-', 'Contains>>>-rocks', 'Flip>>>Upper>>>2>>>8', 'Flip>>>Lower>>>5>>>11', 'Generate'])