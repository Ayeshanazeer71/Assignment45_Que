"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invitation
const guests = ["Bisma", "Fiza", "Iqra"];
const invitation = guests.map(guest => `Dear ${guest}, would you like to join us for dinner ?`);
console.log(invitation);
