function basketballEquipment(input){
    let yearTax = Number(input[0]);
    let shoes = yearTax * 0.60;
    let team = shoes * 0.80;
    let ball = team / 4;
    let accessoaries = ball / 5;
    
    let total = yearTax + shoes + team + ball + accessoaries;
    console.log(total)
}
    basketballEquipment(["365"])