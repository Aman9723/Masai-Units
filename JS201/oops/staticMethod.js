class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
    }
    /*
    1. Static methods are independent of object or instance and can be called directly from the class.
    2. Used as helper functions.
    3. A static method can access static fields.
    */
    static equals(a, b) {
        return a.width * a.height === b.width * b.height;
    }

    static isValidDimensions(width, height) {
        return width === height;
    }
}

let square1 = new Square(8);
let square2 = new Square(9);
console.log(Square.equals(square1, square2));
console.log(Square.isValidDimensions(6, 6));
