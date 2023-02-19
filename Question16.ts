// More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner. 

// List of guests from last exercise
let guests: string[] = ['Allama Iqbal', 'Quaid e Azam', 'Ch rehmat ALi', 'Saad Hussain Rizvi', 'Ertugrul'];

// New guests arrived

// Add a new guest to the beginning of the array
guests.unshift("Sultan Abdul hamid");

// Add a new guest to the middle of the array
guests.splice(1, 0, "Khalid bin Waleed");

// Add a new guest to the end of the array
guests.push("Sultan Salahuddin Ayubi");

console.log("\nNew table large found we are inviting more people\n")

for(let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would like to invite you to dinner.`);
}