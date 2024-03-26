function hotelRoom(input){
    let month = input[0];
    let count = Number(input[1]);
    let studio = 0;
    let apartment = 0;
    let prSt = 0;
    let prAp = 0;

    switch(month){
        case "May":
        case "October":
            studio = 50;
            apartment = 65;
            if ( count > 7 && count <= 14){
                studio = studio * 0.95;
            } else if (count > 14){
                studio = studio * 0.70;
            }
        break;
        case "June":
        case "September":
            studio = 75.20;
            apartment = 68.70;
            if (count > 14){
                studio = studio * 0.80;
            }
        break;
        case "July":
        case "August":
            studio = 76;
            apartment = 77;
        break;                        
    }
    if (count > 14){
        apartment = apartment * 0.90 ;
    }
    prAp = apartment * count;
    prSt = studio * count;

    console.log(`Apartment: ${prAp.toFixed(2)} lv.`);
    console.log(`Studio: ${prSt.toFixed(2)} lv.`);
}
hotelRoom(["August","20"])