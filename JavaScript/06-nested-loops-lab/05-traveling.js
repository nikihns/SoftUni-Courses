function traveling (input){
    let destination = input[0];
    let money = Number(input[1]);
    let index = 2;
    let savedMoney = 0;
    let saved = 0;

    while (destination !== "End") {
        savedMoney = Number (input[index]);
        saved += savedMoney;
        if (saved >= money) {
            console.log(`Going to ${destination}!`);
            index++;
            destination = input[index];
            index++;
            money = input[index];
            saved = 0;
        }
        index ++;
    }
}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
