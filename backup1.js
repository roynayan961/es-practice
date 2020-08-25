<<<<<<< HEAD
function add (num1, num2){   // num2 is declared as backup variable but  u did not mention backup value at num2
num2 = num2 || 20;           // variable will find backup value here
return num1+num2;

}
const total = add(15)  // if u wrote add(15,17) then this function would be executed as 15+17, its not matter u have written any backup value in main function {} 
console.log(total)
=======

>>>>>>> af323ba6d40f52a320ca8985b39df828bbb2eb9b
