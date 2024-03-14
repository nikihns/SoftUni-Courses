function depositCalculator(input){
    let amount = Number(input[0]); //200lv
    let term = Number(input[1]);
    let percentage = Number(input[2]); //10% -> 12m
    // 200 -> 200 * 0.10 -> 220lv
    let extraMoneyForOneYear = amount *(percentage / 100);
    let extraMoneyForOneMonth = extraMoneyForOneYear / 12;
    let extraMoneyEndPeriod = extraMoneyForOneMonth * term;

    let total = amount + extraMoneyEndPeriod;
    console.log(total)
}

depositCalculator([200,3,5.7]);