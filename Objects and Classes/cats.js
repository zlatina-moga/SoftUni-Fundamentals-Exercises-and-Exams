function solve(arr){
    class Cat {
        constructor (name, age){
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for (let i = 0; i < arr.length; i++){
        let [name, age] = arr[i].split(' ');

        let cat = new Cat(name, Number(age));
        cat.meow();      
    }
}