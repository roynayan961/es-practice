const hubby = "Sree Krishna";

console.log(hubby);
const numbers = [12, 45]
numbers[1]=88; //element[1] 45 changes to 88.
numbers.push=12; //element 12 pushed after element 45
// console.log(numbers) // thats ok. but this full array cant be updated as ["nayan" "baran" "roy"]
const hero = {name:"Dev",  phone:4578} //name and phone Element can be changed but u cant change const hero.
console.log(hero)
//if u want to change u must use let instead of const and anytime u cant change element
let playerName = "Antony"
playerName = "Victoria" //because let can be changed! ha ha .
console.log(playerName)
let sum = 0; //declared as let because let will be changed later
for( var i =0; i<10; i++)
{sum = sum+i;}
console.log(i) // after end of the loop count i=0 will be print
// u insert let incase of var in the loop  this will show fault. because var can be leaked but let cant be leaked.
//so we have came into decision that let can be changed and cant be leaked.
// this query will show error for( var let =0; i<10; i++) {sum = sum+i;} console.log(i)
