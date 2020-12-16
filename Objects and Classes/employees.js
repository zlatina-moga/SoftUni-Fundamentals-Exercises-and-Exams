function solve(arr){
    class Employee {
        constructor (name){
            this.name = name,
            this.personalNumber = name.length;
        }
        employeeList() { 
            return `Name: ${this.name} -- Personal Number: ${this.personalNumber}`
        }
    }
    arr = arr.map(x => new Employee(x))
    .forEach(element => {
        console.log(element.employeeList())
    });   
}

