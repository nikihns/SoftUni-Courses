function supliesForSchool(input){
    let numPens         = Number(input[0]);
    let numMarkers      = Number(input[1]);
    let litersForClean  = Number(input[2]);
    let percentDown     = Number(input[3]);

    let pricePens       = numPens * 5.80;
    let priceMarkers    = numMarkers * 7.20;
    let priceClean      = litersForClean * 1.20;

    let totalPrice = pricePens + priceMarkers + priceClean;
    let Discount = (totalPrice * percentDown) / 100;
    let priceWithDiscount = totalPrice - Discount;
    
    console.log(priceWithDiscount)
}

supliesForSchool("2","3","4","25")