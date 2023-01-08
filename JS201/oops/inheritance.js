// Parent and child class
class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    describe() {
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}

// inherits Person class
class Programmer extends Person {
    constructor(_name, _age, _yearsOfExperience) {
        /*
        calls the parent constructor
        inside the child constructor you must execute super() before using this keyword. Calling super() makes sure that the parent constructor initializes the instance.
        */
        super(_name, _age);

        // Custom behaviour
        this.yearsOfExperience = _yearsOfExperience;
    }

    code() {
        console.log(`${this.name} is coding`);
    }
}

const programmers = [
    new Programmer('Dom', 56, 12),
    new Programmer('Jeff', 24, 4),
];

function developSoftware(programmers) {
    //Develop software
    for (let programmer of programmers) {
        programmer.code();
    }
}

developSoftware(programmers);
