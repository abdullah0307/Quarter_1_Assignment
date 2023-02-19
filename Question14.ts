// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

let guests: string[] = ['Allama Iqbal', 'Quaid e Azam', 'Ch rehmat ALi', 'Saad Hussain Rizvi', 'Sultan Usman Ghazi'];

for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, I would like to invite you to dinner.`);
}
