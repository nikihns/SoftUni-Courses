function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let sum = 0;
    let destination = "";
    let place = "";

        if (budget <= 100) {
            destination = "Bulgaria";
            switch(season){
                case "summer": 
                    sum = budget * 0.30;
                    place = "Camp";
                break;
                case "winter":
                     sum = budget * 0.70; 
                     place = "Hotel"; 
                break;
            }
        } else if (budget > 100 && budget <= 1000 ) {
            destination = "Balkans";
            switch(season){
                case "summer": 
                    sum = budget * 0.40; 
                    place = "Camp"; 
                break;
                case "winter": 
                    sum = budget * 0.80; 
                    place = "Hotel"; 
                break;
            }
        } else if(budget > 1000 ){
             destination = "Europe";
             place = "Hotel";
             sum = budget * 0.90; 
        }
       
        console.log(`Somewhere in ${destination}`);
        console.log(`${place} - ${sum.toFixed(2)}`)  ;
}
journey(["50","summer"]);