function calcTotalSum(input) {
    let index = 0;
    let balance = Number (input[index]);
    let text = "NoMoreMoney";
    let total = 0;
    let tx = "";
            
           while (tx !== text) {
            if (tx < 0 || balance < 0) {
                console.log(`Invalid operation!`); break;
            }
                balance = Number (input[index]);
                total += balance; 
                console.log(`Increase: ${balance.toFixed(2)}`)
                index++;
                tx = (input[index]);
                
           }
           
           console.log(`Total: ${total.toFixed(2)}`)
}
calcTotalSum(["0", 
"69.42",
"100",
"NoMoreMoney"])
