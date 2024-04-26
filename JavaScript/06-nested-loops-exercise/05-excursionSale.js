function excursionSale(input){
    let seaVacation = Number(input[0]);
    let mountianVacation = Number(input[1]);
    let countSea= seaVacation;
    let countMount = mountianVacation;
    let index = 2;
    let price = 0;

    while ((countSea + countMount) > 0) {
        let type = input[index];
        if (type === "Stop") {
            break;
        }
        if (type === "sea") {
            if (countSea > 0){
                price += 680;
                countSea --;
            }
           
        } else if (type === "mountain") {
            if (countMount > 0){
                price +=499;
                countMount --;
            }
           
        }
        index++;
    }
    if (countMount + countSea === 0) {
        console.log(`Good job! Everything is sold.`);
        console.log(`Profit: ${price} leva.`)
    } else {
        console.log(`Profit: ${price} leva.`)
    }

}
excursionSale(["2","2","sea","mountain","sea","sea","mountain"])