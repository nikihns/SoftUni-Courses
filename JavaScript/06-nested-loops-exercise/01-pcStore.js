function pcStore(input){
    let processor   = Number(input[0]);
    let video       = Number(input[1]);
    let ram         = Number(input[2]);
    let numberOfRam = Number(input[3]);
    let discount    = Number(input[4]);
   

    let processorPrice = processor * 1.57;
        processorPrice = processorPrice - (processorPrice * discount);

    let videoCardPrice = video * 1.57;
        videoCardPrice = videoCardPrice - (videoCardPrice*discount);
    let ramPrice = (ram*1.57) * numberOfRam;
    let total = processorPrice + videoCardPrice + ramPrice;
    console.log(`Money needed - ${total.toFixed(2)} leva.`);
}
pcStore(["500","200","80","2","0.05"])