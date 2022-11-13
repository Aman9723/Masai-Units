// let arr = [2, 3, 4];
// let res = arr.reduce(function (acc, el) {
//     return acc * el;
// }, 1);
// console.log(res);

// let arr = [1, 2, 3, 4];
// let res = arr.filter(function (el) {
//     return el % 2 == 1;
// }).reduce(function (acc, el) {
//     return acc + el;
// })
// console.log(res);



// let out = users.map(function (el){
//     return (el.firstname + ' ' + el.lastname);
// })

let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
];
  
let out = users.filter(function (el) {
    return (el.place == 'Banglore');
}).map(function (el) {
    return el.firstName;
})