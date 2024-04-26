function santasHoliday(input){
    let days = Number(input[0]);
    let room = input[1];
    let grade = input[2];
    let nights = days-1;
    let totalPirce = 0;
    

    switch (room) {
        case "room for one person":
           totalPirce = 18.00 * nights;
            break;
        case "apartment":
            totalPirce = 25.00 * nights;
            if (days < 10) {
                totalPirce = totalPirce -(totalPirce*0.3);
            } else if (days >= 10 && days <= 15) {
                totalPirce =  totalPirce -(totalPirce*0.35);
            } else if (days > 15) {
                totalPirce = totalPirce -(totalPirce*0.5);
            }
            break;
        case "president apartment":
            totalPirce = 35.00 * nights;
            if (days < 10) {
                totalPirce = totalPirce -(totalPirce*0.1);
            } else if (days >= 10 && days <= 15) {
                totalPirce = totalPirce -(totalPirce*0.15);
            } else if (days > 15) {
                totalPirce = totalPirce -(totalPirce*0.2);
            }
            break;      
    }
    if (grade === "positive") {
        totalPirce = totalPirce * 1.25;
    } else if (grade === "negative") {
        totalPirce = totalPirce * 0.90;
    }
console.log(totalPirce.toFixed(2));
}
santasHoliday(["14","apartment","positive"]);