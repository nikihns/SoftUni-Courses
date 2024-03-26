function skiTrip(input){
    let days = Number(input[0]);
    let type = input[1];
    let grade = input[2];
    let price = 0;
    let nights = days - 1;
    switch(type){
        case "room for one person":
            price = 18.00;
    
        break;
        case "apartment":
            price = 25.00;
            if (days < 10){
                price = price * 0.70;
            } else if (days >= 10 && days <= 15){
                price = price * 0.65;
            } else if (days > 15){
                price = price * 0.50;
            }
        break;    
        case "president apartment":
            price = 35.00;
            if (days < 10){
                price = price * 0.90;
            } else if (days >= 10 && days <= 15){
                price = price * 0.85;
            } else if (days > 15){
                price = price * 0.80;
            }
        break;          
    }
    price = price * nights; 
    if ( grade == "positive"){
        price = price * 1.25;
    } else if (grade == "negative"){
        price = price * 0.90;
    }

    console.log(price.toFixed(2));
}
skiTrip(["30","president apartment","negative"])