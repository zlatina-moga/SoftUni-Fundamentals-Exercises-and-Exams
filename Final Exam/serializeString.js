function solve(input){
    let str = input.shift()
    let idx = {};   

    for(let i = 0; i < str.length; i++){
        let current = str[i];
        if (!idx.hasOwnProperty(current)){ 
            let index = str.indexOf(str[i])           
            idx[current] = {index: [index]}           
        } else {
            let newIndex = str.indexOf(str[i], i)
            if (newIndex !== -1){
                idx[current].index.push(newIndex)
            }             
        }
    }

    for (const kvp of Object.entries(idx)){
        console.log(`${kvp[0]}:${kvp[1].index.join('/')}`)
    }
}


//solve('abababa')
solve(['avjavamsdmcalsdm'])
//solve('%$%$%$%$')
