"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = 'L', message = 'I love TypeScript') {
    console.log(`The shirt size is ${size} and the message on it is: "${message}".`);
}
// Call the function with default values for a large shirt
make_shirt();
// Call the function for a medium shirt with the default message
make_shirt('M');
// Call the function for a shirt of any size with a different message
make_shirt('S', 'JavaScript is awesome!');
