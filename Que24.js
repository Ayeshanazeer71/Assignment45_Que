"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
/// Test whether an item is in an array
// Equality and inequality with strings
// / Equality and inequality with strings
console.log("equality test :", "Ayesha " === "Ayesha"); // True
console.log("Inequality test :", "Ayesha " === "Shazma"); // True
// Using the lower case function
console.log("Hello".toLowerCase() === "hello"); // True
console.log("HELLO".toLowerCase() === "hello"); // True
console.log("Hello".toLowerCase() === "HELLO"); // False
// Numerical tests
console.log(10 === 10); // True
console.log(10 < 20); // True
console.log(10 <= 10); // True
console.log(20 > 10); // True
console.log(20 >= 20); // True
console.log(10 > 20); // False
console.log(20 < 10); // False
// Using "and" and "or" operators
console.log(10 < 20 && "Hello" === "Hello"); // True
console.log(10 > 20 || "Hello" === "Hello"); // True
console.log(10 > 20 && "Hello" === "Hello"); // False
console.log(10 > 20 || "Hello" !== "Hello"); // False
// Test if item is in an array
const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // True
console.log(arr.includes(6)); // False
// Test if item is not in an array
console.log(!arr.includes(6)); // True
console.log(!arr.includes(3)); // False
