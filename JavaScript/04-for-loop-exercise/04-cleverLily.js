function cleverLily(input){
    let age = Number(input[0]);
    let priceWash = Number(input[1]);
    let priceToy = Number(input[2]);

    let savedMoney = 0;
    let receivedToys = 0;
    let allToysPrice = 0;
    let allMoney = 0;
    let save = 10;
    let stolenMoney = 0;

    for (let i = 0; i <= age; i++) {
        if (i > 0 && i % 2 == 0){
            savedMoney  += save;
            save += 10;
            stolenMoney += 1;
        } else if (i >= 1){
            receivedToys = receivedToys + 1;
        }
    }
    allToysPrice = priceToy * receivedToys;
    allMoney = (savedMoney + allToysPrice) - stolenMoney;

    let moneyLeft = 0;
    let neededMoney = 0;

    moneyLeft = allMoney - priceWash;
    neededMoney = priceWash - allMoney;

    if (allMoney >= priceWash){
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else
        console.log(`No! ${neededMoney.toFixed(2)}`);
}
cleverLily(["21","1570.98","3"])