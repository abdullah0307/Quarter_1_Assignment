// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be personalized with the person’s name.

let n:string[] = ["Kamran", "Khurram", "Hassan", "Umer Daraz", "Hamza"]
let messages:string[] = ["He is nice one but very Emotional person", "Nice also but feel to something very soon", "good but careless", "Heavy!", "Very time taking person"]
for (let i=0 ;i<n.length; i++){
    console.log(`${n[i]} : ${messages[i]}`);
}