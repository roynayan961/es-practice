function add (num1, num2){
num2 = num2 || 20; // num2 is declared as backup value
return num1+num2;

}
const total = add(15)
console.log(total)