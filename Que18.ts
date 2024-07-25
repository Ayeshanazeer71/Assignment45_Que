
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


let placeToVist : string[] = ["Uk", "sudia Arabia","germany","china", "paris"];

// print in original array
console.log("original Order:",placeToVist)

// print array in alphabetical order wiyhout modifing the actual list
console.log(" Alphabetical order:", placeToVist.slice().sort());

// Show that array is still in its orginal order by printhing it.
console.log("orginal Order:", placeToVist);

// print array in reverse alpabetical order without chnage the orderof the 
console.log("reverse Order:", placeToVist.slice().sort().reverse());


// show that array is still in its original order by printing it again
console.log("original Order:", placeToVist);

// Reverse the ordder of array list print the array to show that its order has change
console.log("reverse Order change");
placeToVist.reverse();
console.log(placeToVist);

// reverse the order of list again print the list to show its back to its original order
console.log("Original Order:",placeToVist.sort());
console.log(placeToVist);

// short array so its store in alphabetical order print the array to show that its  order has been change
console.log("reverse alphabetical Order chnage",placeToVist.sort());
console.log(placeToVist);










