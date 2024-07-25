"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
const magicians = ["David Copperfield", "Houdini", "Penn & Teller"];
// Function to print each magician's name
function showMagicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
// Function to add "the Great" to each magician's name
function makeGreat(magicians) {
    return magicians.map(magician => `The Great ${magician}`);
}
// Copy and modify the array
const originalMagicians = [...magicians];
const greatMagicians = makeGreat(originalMagicians);
// Show both arrays
console.log("Original Magicians:");
showMagicians(magicians);
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
