function newHouse(input){
    let type = input[0];
    let numFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let sum = 0;
    
    switch(type){
        case "Roses":
            sum = numFlowers * 5;
            if (numFlowers > 80){
                sum = sum * 0.90;
            } 
            break;
        case "Dahlias":
            sum = numFlowers * 3.80; 
            if (numFlowers > 90){
                sum = sum * 0.85;
            } 
            break;
        case "Tulips":
            sum = numFlowers * 2.80; 
            if (numFlowers > 80){
                sum = sum * 0.85;
            }
            break;
        case "Narcissus":
            sum = numFlowers * 3.00; 
            if (numFlowers < 120){
                sum = sum * 1.15;
            }
            break;
        case "Gladiolus":
            sum = numFlowers * 2.50; 
            if (numFlowers < 80){
                sum = sum * 1.20;
            }
            break;
    }
   let diff = Math.abs(budget-sum);
    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${numFlowers} ${type} and ${diff.toFixed(2)} leva left.`)
    } else 
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
        
}

newHouse(["Narcissus","119","360"]);