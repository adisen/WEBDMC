// Outputting
// console.log("Hello World");
// alert("Hello World");

// Statements
// Single line comment
/*
Muti line lines
adjdjajd
aidkdiakakl
skdka
sdjdjd
sjdjdjda
djdjdadadj
*/

// var aalg = 4;
// console.log(5 + 9);
// console.log("akakdkd");

// // Variables
// var x; // Variable Declaration
// x = 7; // Variable assignment
// var y;
// y = 20;

// let z = 67;
// const Daniel = 78;

// Daniel = 67;
// console.log(z);

// Operators

// = assignment
// + addition
// console.log(`2 + 6 = ${2 + 6}`);
// // - subtraction
// console.log(`2 - 6 = ${2 - 6}`);
// // * multiplication
// console.log(`2 * 6 = ${2 * 6}`);
// // / division
// console.log(`6 + 2 = ${6 / 2}`);

// % modulus (remainder)

// Comparision operators
// < less than
// > greater than
// == equal to
// >= greater than or equal to
// <= less than or equal

// Data Types
// Number - 8, 9, 9.7 (float)
// var num = 89;
// var flt = 98.677;
// console.log(typeof num);
// String - 'a', 'alphabet'
// var str = "This is a string";
// console.log(typeof str);
// var char = "a";
//Object (key - value pair)
// var obj = {
//   name: "John Doe",
//   age: 78,
// };

// console.log(typeof obj);

// Array
// var arr = [7, 8, 9, 0];

// console.log(typeof arr);

// Undefined
// var und;
// console.log(typeof und);

// Boolean (true/false)
// var bool1 = true;
// var bool2 = false;

// Functions
// var num1 = 9;
// var num2 = 10;
// console.log(num1 + num2);

// Declare function
// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// add(4, 7);
// add(8, 9);

// // Object Deep Dive
// var person = {
//   name: "John Doe",
//   age: 78,
//   height: 5.8,
//   weight: 160,
//   sayName: function () {
//     console.log("My name is" + this.name);
//   },
// };

// console.log(person["age"]);
// console.log(person.height);
// person.sayName();

// // String concatenation
// var str1 = "Israel";
// var str2 = "Ade";

// console.log(str1 + " " + str2);

// // Arrays
// var arr = ["Timi", "Josh", "Mike", "Dom"];
// arr[0] = "John";
// console.log(arr[0]);

// Comparision
// var elm1 = 100;
// var elm2 = 100;

// // console.log(elm1 == elm2);

// // Conditionals
// if (elm1 > elm2) {
//   //  block of code to be executed if condition1 is true
//   console.log("Element 1 is greater than element 2");
// } else if (elm1 < elm2) {
//   //  block of code to be executed if the condition1 is false and condition2 is true
//   console.log("Element 1 is less than element 2");
// } else {
//   //  block of code to be executed if the condition1 is false and condition2 is false
//   console.log("Element 1 is equal to element 2");
// }

// Loops
// console.log("Hello World");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");
// console.log("Hello world");

// for - loops through a block of code a number of times
// for (let i = 0; i <= 100; i++) {
//   // code block to be executed
//   console.log(i);
// }
// for/in - loops through the properties of an object
var obj = {
  name: "Danielle",
  gender: "f",
  age: 78,
};

for (var x in obj) {
  console.log(x);
}
// for/of - loops through the values of an iterable object
// var arr = ["Danielle", "Justina", "Jane"];
var arr = "Israel Adetunji";
for (var x of arr) {
  console.log(x);
}
// while - loops through a block of code while a specified condition is true
var i = 0;
while (i < 0) {
  // Block of code to run
  console.log(i);
  i++;
}
// do/while - also loops through a block of code while a specified condition is true
do {
  console.log(i);
} while (i < 0);
