// . Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block

// version 1
let alien_color:string = 'green'

if (alien_color == 'green')
{
    console.log("Player has earned 5 points")
}
else
{
    console.log("Player has earned 10 points")
}

// version 2
alien_color = 'red'

if (alien_color == 'green')
{
    console.log("Player has earned 5 points")
}
else
{
    console.log("Player has earned 10 points")
}