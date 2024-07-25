"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
const guests = ["Bisma", "Fiza", "Iqra"];
guests.unshift(`Ayesha`, `Shaheena`, `Sobia`, `Hira`);
const invitation = guests.map(guest => `Dear ${guest}, would you like to join us for dinner ?`);
console.log(invitation);
