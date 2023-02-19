// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the
// dinner, and you have space for only two guests.
// • Start with your program from last Exercise. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. 

let guests: string[] = ['Sultan Abdul hamid', 'Khalid bin Waleed', 'Allama Iqbal', 'Quaid e Azam', 'Ch rehmat ALi', 'Saad Hussain Rizvi', 'Ertugrul', 'Sultan Salahuddin Ayubi'];

console.log('Guest that were invited  last time:');
console.log(guests);

console.log('\nOnly two guests can be invited for dinner becuase of the small table:');
while (guests.length > 2) {
  let removedGuest = guests.pop();
  console.log(`Sorry, ${removedGuest}, we cannot invite you to dinner because of small table.`);
}

console.log('\nInvitation for the remaining guests:');
for (let guest of guests) {
  console.log(`You are still invited, ${guest}.`);
}

console.log('\nFinal list:');
guests.splice(0, guests.length);
console.log(guests);
