function repainting(input){
    let nailon              = Number(input[0]);
    let litersPaint         = Number(input[1]);
    let litersRazreditel    = Number(input[2]);
    let hoursToCompleteWork = Number(input[3]);

    let percentPaint = ((litersPaint * 10) / 100)

    let priceNailon = (nailon + 2) * 1.5 ;
    let pricePaint  = (litersPaint + percentPaint) * 14.5;
    let priceRazreditel = litersRazreditel * 5;
    let priceForBags = 0.4;

    let totalPrice = priceNailon + pricePaint + priceRazreditel + priceForBags;
    let priceForWorkers = (totalPrice * 0.3) * hoursToCompleteWork;

    console.log(totalPrice + priceForWorkers)
}
repainting(["10","11","4","8"])