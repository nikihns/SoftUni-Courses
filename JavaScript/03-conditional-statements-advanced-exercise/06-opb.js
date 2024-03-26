function opb(input){
    let n1 =  Number(input[0]);
    let n2 =  Number(input[1]);
    let operator = input[2];
    let result = "";
    let res = 0;

   


    switch(operator){
        case "+":
            res = n1 + n2;
            if (res % 2 == 0){
                result = "even";
            } else
                result = "odd";
            console.log(`${n1} ${operator} ${n2} = ${res} - ${result}`); 
            break;
        case "-":
            res = n1 - n2;
            if (res % 2 == 0){
                result = "even";
            } else
                result = "odd";
            console.log(`${n1} ${operator} ${n2} = ${res} - ${result}`); 
             if (res % 2 == 0){
        result = "even";
    } else
        result = "odd";   
            break;
        case "*":
            res = n1 * n2;
            if (res % 2 == 0){
                result = "even";
            } else
                result = "odd";
            console.log(`${n1} ${operator} ${n2} = ${res} - ${result}`);    
            break; 
        case "/":
            res = n1 / n2;
            if (n2 === 0){
                console.log(`Cannot divide ${n1} by zero`);  
                break;  
            }
            console.log(`${n1} ${operator} ${n2} = ${res.toFixed(2)}`); 
            break;
        case "%":
            res = n1 % n2;
            if (n2 === 0){
                console.log(`Cannot divide ${n1} by zero`);  
                break;  
            }
            console.log(`${n1} ${operator} ${n2} = ${res}`);  
            break;               
    }
}
opb(["10","0","%"])