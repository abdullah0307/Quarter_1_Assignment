// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.

let guests: string[] = ['Allama Iqbal', 'Quaid e Azam', 'Ch rehmat ALi', 'Saad Hussain Rizvi', 'Sultan Usman Ghazi'];

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would like to invite you to dinner.`);
}

// The guest who is unable to come
console.log(`\nGuest ${guests[guests.length - 1]} is not be able to come!\n`);

// A guest can't make it, replace the guest with another person
guests[guests.length - 1] = 'Ertugrul';

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would like to invite you to dinner.`);
}