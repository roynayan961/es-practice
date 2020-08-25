function add (num1, num2 = 15){    //backup value is useless because because function already got value before.
    num2 = num2 || 20;             // value of variable num2 still useless 
    return num1+num2;
    
    }
    const total = add(15,17)  //see the strange. function will be executed as value given here.
    console.log(total)