// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// / Function to store car information
function createCar(manufacturer: string, model: string, ...additionalInfo: [string, any][]): object {
    const car: { [key: string]: any } = {
        manufacturer,
        model
    };
    
    // Add additional information to the car object
    additionalInfo.forEach(([key, value]) => {
        car[key] = value;
    });
    
    return car;
}

// Call the function with manufacturer, model, and additional details
const car1 = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2024]);
const car2 = createCar("Ford", "Mustang", ["color", "red"], ["engine", "V8"], ["sunroof", true]);

// Print the returned objects
console.log("Car 1:", car1);
console.log("Car 2:", car2);
