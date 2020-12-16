function solve(arr){
    let register = {};

    arr.forEach(line => {
        if (line.includes(':')){
            let [courseName, capacity] = line.split(':').map(e => e.trim())
            capacity = Number(capacity);
            if (!register[courseName]){
                register[courseName] = {capacity, students: []}
            } else {
                register[courseName].capacity += capacity
            }
        }

        else if (line.includes('with email')){
            let [user, word, word1, email, word2, course] = line.split(' ').map(e => e.trim());
            let [userName, creditCount] = user.split('[');
            creditCount = creditCount.replace(']', '')

            if (register.hasOwnProperty(course)){
                if (register[course].capacity > 0){
                    register[course].students.push({userName, creditCount, email, courseName: course})
                    register[course].capacity -= 1
                }
            }
        }
    });

    Object.keys(register).sort((a, b) => register[b].students.length - register[a].students.length).map(k=> {
        register[k].students = register[k].students.sort((a, b) => b.creditCount - a.creditCount)
        return k;
    })
    .forEach(k => {
        const {courseName, capacity, students} = {courseName: k, ...register[k]}
        console.log(`${courseName}: ${capacity} places left`)
        if (students.length > 0) {
            console.log(`${students.map(s => `--- ${s.creditCount}: ${s.userName}, ${s.email}`).join('\n')}`);
        }
    })
}

