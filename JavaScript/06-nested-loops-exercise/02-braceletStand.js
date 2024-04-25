function bracelentStand(input){
    let dailyMoney = Number(input[0]);
    let wonMoney = Number(input[1]);
    let moneySpend = Number(input[2]);
    let giftPrice = Number(input[3]);

    let totalDaily = 5 * dailyMoney;
    let totalWon = 5 * wonMoney;
    let totalSave = totalDaily+totalWon;

    let finalMoney = totalSave - moneySpend;
    let neededMoney = giftPrice - finalMoney;

    if (finalMoney >= giftPrice) {
        console.log(`Profit: ${finalMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${neededMoney.toFixed(2)} BGN.`);
    }
}
bracelentStand(["5.12","32.05","15","150"])