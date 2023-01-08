class User {
    /*
    Class fields are variables that hold information. Fields can be attached to 2 entities:

    1. Fields on the class instance (object)
    2. Fields on the class itself (aka static)

    The fields also have 2 levels of accessibility:

    1. Public: the field is accessible anywhere
    2. Private: the field is accessible only within the body of the class

    static fields are independent of instance and can be used from class
    */

    username; // public field
    static TYPE_ADMIN = 'admin'; // public static field
    #password; // private field
    static #USERS = 0; // private static field

    /*
    Constructor initializes the instace. If you don't define a constructor for the class, by default an empty constructor is created. 
    */
    constructor(name, password, type) {
        User.#USERS++;
        if (this.#validate(name, password)) {
            this.username = name;
            this.#password = password;
            this.type = type;
        } else {
            throw 'Validation failed';
        }
    }

    #validate(name, password) {
        if (name != '' && password.length >= 3) return true;
        return false;
    }

    login(name, password) {
        if (this.#password == password && this.username == name) {
            console.log('Login Success');
        } else {
            console.log('Wrong Cred');
        }
    }
}

let user1 = new User('aman', '123', User.TYPE_ADMIN);
console.log(user1);

/*
Encapsulation can be defined as “the packing of data and functions into one component”.

Abstraction hides certain details and only show the essential features of the object.
*/
