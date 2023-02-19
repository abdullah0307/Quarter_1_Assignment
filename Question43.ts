// Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time. 

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
      great_magicians.push(`Great ${magician}`);
    }
    return great_magicians;
  }
  
  function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  let magicians: string[] = ["David Blaine", "David Copperfield", "Criss Angel"];
  let great_magicians: string[] = make_great([...magicians]);
  
  show_magicians(magicians);
  console.log("--------------------");
  show_magicians(great_magicians);
  