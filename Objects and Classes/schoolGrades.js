function solve(arr){
    let students = {}
    for (let line of arr){
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (students.hasOwnProperty(name)){
            let oldGrades = students[name]
            let allGrades = oldGrades.concat(grades)
            students[name]= allGrades
        } else {
            students[name] = grades
        }
    }

    let sorted = Object.entries(students);
    sorted.sort(avgGrade);

    for (let [name, grades] of sorted){
        console.log(`${name}: ${grades.join(', ')}`)
    }

    function avgGrade([nameA, gradesA], [nameB, gradesB]){
        let avgA = 0;
        gradesA.forEach(x=> avgA += x)
        avgA /= gradesA.length;

        let avgB = 0;
        gradesB.forEach(x=> avgB += x)
        avgB /= gradesB.length;

        return avgA - avgB;
    }
}

