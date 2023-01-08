// es5 syntax
const sum = require('./sum');

const sum1 = (a, b) => {
    return a + b;
};

test('adds 1 + 2 to equal 3', () => {
    expect(sum(3, 2)).toBe(sum1(2,3));
});