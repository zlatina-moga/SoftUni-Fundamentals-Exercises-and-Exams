function sugarCubes(arr) {
    let cubes = arr.shift().map(Number);
    let commands = arr;
    for (let i = 0; commands.length; i++) {
        if (commands[i] === `Mort`) {
            console.log(cubes.join(' '));
            break;
        }
        let token = commands[i].split(' ');
        let command = token[0];
        let value = Number(token[1]);
        if (command === 'Add') {
            cubes.push(value);
        } else if (command === 'Remove') {
            for (let i = 0; i < cubes.length; i++) {
                if (cubes[i] === value) {
                    let index = cubes.indexOf(cubes[i]);
                    cubes.splice(index, 1);
                    break;
                }
            }
        } else if (command === 'Replace') {
            for (let i = 0; i < cubes.length; i++) {
                let num = Number(token[2]);
                if (cubes[i] === value) {
                    let replacement = cubes.indexOf(cubes[i]);
                    cubes.splice(replacement, 1, num);
                    break;
                }
            }
        } else if (command === 'Collapse') {
            for (let i = 0; i < cubes.length; i++) {
                if (cubes[i] < value) {
                    cubes = cubes.filter((x) => x >= value);
                    break;
                }
            }
        }
    }
}