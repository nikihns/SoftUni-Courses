function foodDelivery(input){
    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let veganMenuCount = Number(input[2]);

    let totalChickenMenuPrice = chickenMenuCount * 10.35;
    let totalFishMenuPrice = fishMenuCount * 12.40;
    let totalVeganMenuPrice = veganMenuCount * 8.15;

    let totalPriceForMeu = totalChickenMenuPrice + totalFishMenuPrice + totalVeganMenuPrice;

    let cakePrice = totalPriceForMeu * 0.20;

    let totalPrice = totalPriceForMeu + cakePrice + 2.50; //delivery 2.50

    console.log(totalPrice);
}
foodDelivery(["9","2","6"])