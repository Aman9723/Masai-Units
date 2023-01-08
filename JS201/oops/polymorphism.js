/*
Polymorphism - is the act of redefining a method inside the derived child class of a parent.
*/
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log('Generic Animal Sound!');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        // calling the parent method
        super.makeSound();
        console.log('Woof! Woof!');
    }
}

let a1 = new Animal('Dom');
let a2 = new Dog('Jeff');

// checks in current class and if not found then checks in parent class
a1.makeSound();
a2.makeSound();
