let sweets = ['kaju', 'laddu', 'kova', 'burfi'];
// sweets.forEach(function (elem, index, array){
//     console.log(elem,index);
// })

// let x = sweets.map(function (e, i){
//     return e;
// })
// console.log(x);

// forEach vs map
// 1. forEach wont return anything, it will return undefined
// 2. map will return Array
// 3. forEach has extra charges - []
// 4. map doesn't have additional charges - by default it returns an array

let num = [10, 4, 5, 6, 7]

// let x = num.map(function (e, i) {
//     return e * 2;
// })
// console.log(x);

// map and filter are same but filter will return only elements which are satisfying the condition

// let x = num.filter(function (e, i) {
//     return e % 2 == 0;
// })
// console.log(x);


// 1st case: with initial value sum
// let x = num.reduce(function (sum, el, i, arr) {
//     return sum + el;
// })
// console.log(x);

// 2nd case: without initial value 
let summer = function (sum, el) {
    return sum + el;
}
let res = num.reduce(summer, 20);
console.log(res);


// chaining

// Array.forEach => undefined
// Array.map => Array
// Array.filter => Array
// Array.reduce => single number

// foreach().map() => possible
// map().forEach() => possible
// map().filter() => possible
// filter().reduce() => possible