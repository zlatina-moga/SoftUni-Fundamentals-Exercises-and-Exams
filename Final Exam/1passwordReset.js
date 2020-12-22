function solve(arr){
    let password = arr.shift();
    let newPass = ''

    for (let line of arr){
        if (line === 'Done'){
            break;
        }
        let tokens = line.split(' ');
        let command = tokens[0];

        switch (command) {
            case 'TakeOdd':
                takeodd(password);
                break;
            case 'Cut':
                cut(Number(tokens[1]), Number(tokens[2]))
                break;
            case 'Substitute':
                substitude(tokens[1], tokens[2])
                break;
        }
    }
    console.log(`Your password is: ${password}`)

    function takeodd(input){
        for (let i = 0; i < password.length; i++){
            if (i % 2 == 1){
                newPass += password[i];
            }
        }
        password = newPass;
        console.log(password)
    };
    function cut(index, length){
        let left = password.slice(0, index);
        let right = password.slice(index+length);
        password = left+right;
        console.log(password)
    };
    function substitude(substring, substitude){
        if (password.includes(substring)){
            while (password.search(substring) !== -1){
                password = password.replace(substring, substitude);
            }
            console.log(password)
        } else {
            console.log('Nothing to replace!')
        }
    }
}

solve(['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr', 'TakeOdd', 'Cut 15 3', 'Substitude :: -', 'Substitude | ^', 'Done'])
//olve(['up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy', 'TakeOdd', 'Cut 18 2', 'Substitude ! ***', 'Substitude ? .!.', 'Done'])