function solve(arr){
    let input = arr.shift();
    let pattern =/([@#])(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;
    let counter = 0;
    let matched = [];

    let match = pattern.exec(input);
    while (match){
        counter++
        let {firstWord, secondWord} = match.groups;
        let reversedFirstWord = firstWord.split('').reverse().join('');
        if (reversedFirstWord === secondWord){
            matched.push(`${firstWord} <=> ${secondWord}`)
        }
        match = pattern.exec(input);
    }

    if (counter < 1){
        console.log('No word pairs found!')
    } else {
        console.log(`${counter} word pairs found!`)
    }

    if (matched.length < 1){
        console.log('No mirror words!')
    } else {
        console.log('The mirror words are:')
        console.log(matched.join(', '))
    }
} 

//solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
solve(['po0l##l0op @bAc##cAB@ @LK@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])