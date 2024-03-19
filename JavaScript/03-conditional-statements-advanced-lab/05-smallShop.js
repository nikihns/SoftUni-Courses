function smallShop(input){
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    let coffee = 0;
    let water = 0;
    let beer = 0;
    let sweets = 0;
    let peanuts = 0;

    switch(town){
        case "Sofia":
            coffee = 0.5;
            water = 0.8;
            beer = 1.2;
            sweets = 1.45;
            peanuts = 1.6;
            break;
        case "Plovdiv":
            coffee = 0.4;
            water = 0.7;
            beer = 1.15;
            sweets = 1.3;
            peanuts = 1.5;
            break;
        case "Varna":
            coffee = 0.45;
            water = 0.7;
            beer = 1.1;
            sweets = 1.35;
            peanuts = 1.55;
            break;                
    }
    if (product == "coffee"){
        console.log(coffee * quantity);
    } else if (
        product == "water"){
            console.log(water*quantity);
    }else if (
        product == "beer"){
            console.log(beer*quantity);
    }else if (
        product == "sweets"){
            console.log(sweets*quantity);
    }else if (
        product == "peanuts"){
            console.log(peanuts*quantity);
    }

}