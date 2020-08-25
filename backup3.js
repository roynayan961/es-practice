function add (num1, num2 = 13){   //13 will be added as backup value to function add
    num2 = num2 || 20;            // no need to this value 20 at num2 because function already got backup value above.
    return num1+num2;
    
    }
    const total = add(15)  //no value of second variable num2 is mentioned here so it will jump to backup value at main {} section
    console.log(total)