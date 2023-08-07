// // ---------------
// console.log('#1');

// // "Normalna" deklaracja funkcji
// function classicAdd(a = 0, b = 0, c = c) {
//   return a + b + c;
// }

// // To samo w postaci arrow function
// const arrowAdd = (a = 0, b = 0, c = 0) => {
//   return a + b + c;
// };

// // implicit return
// const implicitReturnAdd = (a = 0, b = 0, c = 0) => a + b + c;

// // ---------------
// console.log('#2');

// const add = (a = 0, b = 0, c = 0) => { // multiple params - parens needed
//   return a + b + c;
// };

// const square = (a) => { // single param - parens not needed
//   return a * a;
// };

// const greet = () => { // no params - parens needed
//   console.log("Cześć!");
// };

// // ---------------
// console.log('#3');

// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// const implicitAdd = (a, b, c) => a + b + c;

// // Przed
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Po
// const arrowAdd = (a, b, c) => a + b + c;

// const toObjectProperty = value => {
//   return {
//     foo: value
//   }
// };

// const toObjectPropertyImplicit = value => ({
//   foo: value
// })

// console.log(toObjectProperty(23));
// console.log(toObjectPropertyImplicit(23));

// const returnArrayOfStrings = value => ([...value]);

// console.log(returnArrayOfStrings('foobar'));

// ---------------
console.log('#4');

const add = (...args) => {
  console.log(args);
};

add(1, 2, 3);// [1, 2, 3]

// // ---------------
// console.log('#5');

// const numbers = [5, 10, 15, 20, 25];

// // Deklaracja funkcji
// numbers.forEach(function (number, index) {
//   console.log(`Indeks ${index}, wartość ${number}`);
// });

// // Anonimowa funkcja strzałkowa
// numbers.forEach((number, index) => {
//   console.log(`Indeks ${index}, wartość ${number}`);
// });

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Indeks ${index}, wartość ${number}`);
// };

// numbers.forEach(logMessage);
