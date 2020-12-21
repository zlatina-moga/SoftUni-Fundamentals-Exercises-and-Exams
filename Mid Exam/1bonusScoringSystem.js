function solve(arr){
    let studentsCount = Number(arr.shift());
    let lecturesCount = Number(arr.shift());
    let addBonus = Number(arr.shift()); 
    let maxBonus = 0;
    let maxStudent = 0;
    
    for (let i = 0; i < arr.length; i++){
        let bonus = Number(Number(arr[i]) / lecturesCount * (5 + addBonus))
        if (bonus > maxBonus){
            maxBonus = bonus;
            maxStudent = Number(arr[i]);
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`)
    console.log(`The student has attended ${maxStudent} lectures.`)
}
//solve(['5', '25', '30', '12', '19', '24', '16', '20'])
solve(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18'])
