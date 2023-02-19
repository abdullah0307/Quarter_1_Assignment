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

// Store the locations in a array. Make sure the array is not in alphabetical order.
let place_to_visit:string[] = ["makkah", "madina", "Bait-ul-muqdass", "Turkey", "afghanistan", "iran", "india"]

// Print your array in its original order.
console.log(`Original list of places: ${place_to_visit}`)

// Print your array in alphabetical order without modifying the actual list.
console.log(`Sorted list of places ${place_to_visit.sort()}`)

// Show that your array is still in its original order by printing it.
console.log(`Original list of places: ${place_to_visit}`)

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`Sorted list of places ${place_to_visit.sort().reverse()}`)

// Show that your array is still in its original order by printing it again.
console.log(`Original list of places: ${place_to_visit}`)

// Reverse the order of your list. Print the array to show that its order has changed.
place_to_visit.reverse()
console.log(`Sorted list of places in reverse order ${place_to_visit}`)

// Reverse the order of your list again. Print the list to show it’s back to its original order.
place_to_visit.reverse()
console.log(`Sorted list of places twice reverse order ${place_to_visit}`)

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
place_to_visit.sort();
console.log("Alphabetical Order: " + place_to_visit);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
place_to_visit.sort().reverse();
console.log("Reverse Alphabetical Order: " + place_to_visit);

