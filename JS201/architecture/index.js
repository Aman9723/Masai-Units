class User {
    #password;
    constructor() {
        this.organization = 'masai';
    }

    #validateUsername(username) {
        return username.includes('@') ? false : true;
    }

    #validatePassword(password) {
        return password.includes('123') ? false : true;
    }

    login(username, password) {
        if (username === this.username && password === this.#password)
            console.log('Login Successful');
        else
            console.log('Please enter correct details');
    }

    signUp(username, password) {
        // we need to validate what user types 
        let isValidated;
        isValidated = this.#validateUsername(username) && this.#validatePassword(password);
        if (isValidated) {
            this.username = username;
            this.#password = password;
            console.log('User registered successfully');
            users.push(this);
        }
        // store data and show success message
        else {
            console.log('Please enter correct details');
        }
    }
}

let users = [];
// let u1 = new User();
// u1.signUp('pablo', 'pable');
// u1.login('pablo', 'pable')

class Student extends User {
    constructor() {
        super();
        this.numofAssignments = 0;
    }
    submitAssignment() {
        this.numofAssignments++;
        console.log('%c Completed', 'color: green');
    }
}

// removeUser is only accessible to admin 
class Admin extends User{
    constructor() {
        super();
    }
    removeUser(username) {
        users = users.filter((elm) => {
            return elm.username != username;
        });
    }
}

// let s1 = new Student();
// s1.signUp('papu', 'papupass')
// s1.login('papu', 'papupass');
// // s1.submitAssignment();

// let a1 = new Admin();
// a1.signUp('aman','aman20');
// a1.login('aman', 'aman20');
// a1.removeUser('papu');
// console.log(users);

function Signup() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let s1 = new Student();
    s1.signUp(username, password);
    console.log(users);
}
