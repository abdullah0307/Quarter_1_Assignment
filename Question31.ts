// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed. 

// Make the empty user list
let users: string[] = [];

if (users.length == 0) {
  console.log("We need to find some users!");
}

// Fill the list of the users
users = ["ALI", "AHMAD", "KHAN"];

if (users.length > 0) {
  for (let user of users) {
    console.log("Welcome, " + user + "!");
  }
}

// Again empty the users list
users = [];

if (users.length == 0) {
  console.log("We need to find some users!");
}
