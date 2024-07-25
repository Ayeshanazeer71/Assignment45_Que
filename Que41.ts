// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Array of magician names
const magicians: string[] = ["David Copperfield", "Houdini", "Penn & Teller"];

// Function to print each magician's name
function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Calling the function
showMagicians(magicians);