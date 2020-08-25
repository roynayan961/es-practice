const firstName= "Justine";
const lastName = "TimberLake";
const fullName= firstName+ " "  +lastName; //if we would used firstName+lastName only we would get result JustineTimberLake
console.log(fullName)    // we concatenated a space so we got a space between two string variable .
const fullName2 = firstName + " " +lastName + "" +  " is a good boy"  //[1 digit space must to keep a fair distance]
console.log(fullName2)
const fullName3 = ` ${firstName}  ${lastName}  ${0+17} is a good boy. `; //that is the template system what we get in ES6
console.log(fullName3);
const multiLine = "I love u\n"
+ "i Miss u\n"
+ " no i do not  need u\n" 
+ "on the baily road"
console.log(multiLine) 
const multiLine2 = ` I Love u               
I Miss u
No I dont need u on the baily road   `
console.log(multiLine2)             //template charismatic has began

