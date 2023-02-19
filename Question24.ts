// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array 

let car = "Toyota", year=2023, age=23;
let colors = ['red', 'blue', 'green'];

// Tests for inequality and inequality with strings
console.log("car is notequal to mersides")
console.log(car != "mersides")

console.log("car is equal to Toyota")
console.log(car == "Toyota")

// Tests using the lower case function
console.log("Is car == 'subaru'? I predict False.");
console.log(car == 'subaru');

console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

// Numerical tests involving equality and inequality,
// greater than and less than, greater than or equal to, and less than or equal to
console.log("Is year == 2022? I predict True.");
console.log(year == 2022);

console.log("Is year != 2020? I predict True.");
console.log(year != 2020);

console.log("Is year > 2021? I predict True.");
console.log(year > 2021);

console.log("Is year >= 2022? I predict True.");
console.log(year >= 2022);

console.log("Is year < 2023? I predict True.");
console.log(year < 2023);

console.log("Is year <= 2022? I predict True.");
console.log(year <= 2022);

// Tests using "and" and "or" operators
console.log("Is car == 'Subaru' and year == 2022? I predict True.");
console.log(car == 'Subaru' && year == 2022);

console.log("Is car == 'Toyota' or year == 2022? I predict True.");
console.log(car == 'Toyota' || year == 2022);

// Test whether an item is in a array
console.log("Is 'red' in the colors array? I predict True.");
console.log(colors.indexOf('red') > -1);

console.log("Is 'yellow' in the colors array? I predict False.");
console.log(colors.indexOf('yellow') > -1);

// Test whether an item is not in a array
console.log("Is 'red' not in the colors array? I predict False.");
console.log(!(colors.indexOf('red') > -1));

console.log("Is 'yellow' not in the colors array? I predict True.");
console.log(!(colors.indexOf('yellow') > -1));