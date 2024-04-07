function vacation(input){
    let moneyForVacation = Number (input[0]);
    let cash = Number (input[1]);
    let in2 = 2;
    let in3 = 3;
    let action = input[in2];
    let sum = input[in3];
    let daysSpend = 0;
    let allDays = 0;

    while (moneyForVacation > cash) {
        action = input[in2];
        sum = Number (input[in3]);
            if (action === "spend") {
                cash -= sum;
                if (cash < 0) {
                    cash = 0;
                }
                daysSpend ++;
                allDays ++;
                if (daysSpend >= 5) {
                    console.log(`You can't save the money.`)
                    console.log(`${allDays}`)
                    break;
                }
            } else if (action === "save") {
                cash += sum;
                daysSpend = 0;
                allDays ++;
            }
            in2 +=2;
            in3 +=2;
    }
    if (cash >= moneyForVacation) {
         console.log(`You saved the money for ${allDays} days.`)           
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])