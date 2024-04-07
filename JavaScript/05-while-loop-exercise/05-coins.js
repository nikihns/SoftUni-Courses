function coins(input){
    let money = Number(input[0]);
    let coinsv = money * 100;
    let coins = coinsv.toFixed(0);
    let coinNumber = 0;
    while (coins > 0) {
        if (coins >= 200){
            coinNumber ++;
            coins -= 200;
        } else if (coins >= 100 && coins < 200){
            coinNumber ++;
            coins -= 100;
        } else if (coins >= 50 && coins < 100){
            coinNumber ++;
            coins -= 50;
        } else if (coins >= 20 && coins < 50){
            coinNumber ++;
            coins -= 20;
        } else if (coins >=10 && coins < 20){
            coinNumber ++;
            coins -= 10;
        } else if (coins >= 5 && coins < 10){
            coinNumber ++;
            coins -= 5;
        } else if (coins >=2 && coins < 5){
            coinNumber ++;
            coins -= 2;
        } else if (coins < 2) {
            coinNumber ++;
            coins -= 1;
        }
    }
    console.log(coinNumber);
}
coins(["2.73"])