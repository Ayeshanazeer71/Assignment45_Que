"use strict";
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let friend = ["Smara", "Shazia", "Asma", "Nazia"];
friend.slice();
for (let i = 0; i < friend.length; i++) {
    console.log(friend[i]);
}
friend.slice();
for (let i = 0; i < friend.length; i++) {
    console.log(friend[6]);
}
