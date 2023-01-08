class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
        this.numOfRequestsForArea = 0;
    }
    // getter - used to get some value.
    get area() {
        this.numOfRequestsForArea++;
        return this.width * this.height;
    }
    // setter - used to set some property.
    set area(area) {
        this.height = this.width = Math.sqrt(area);
    }
}

let square1 = new Square(25);
// getters and setters behave like a property
console.log(square1.area);
square1.area = 25;
console.log(square1.height);
console.log(square1.numOfRequestsForArea);
