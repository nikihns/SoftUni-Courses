function tennis (input){
let tournaments = Number(input[0]);
let startingPoints = Number(input[1]);
let points = startingPoints;
let averagePoints = 0;
let countWins = 0;

for (let i = 2; i <= tournaments + 2; i++) {
    let position = input[i];
        if (position === "W"){
                points += 2000;
                countWins += 1;
        } else if (position === "F") {
                points += 1200;
        } else if (position === "SF") {
                points += 720;
        }     
    }
    averagePoints = points - startingPoints;
    averagePoints = averagePoints / tournaments;
    countWins = (countWins / tournaments) * 100;
   
    console.log(`Final points: ${points.toFixed(0)}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${countWins.toFixed(2)}%`);
}
        tennis(["7",
        "1200",
        "SF",
        "F",
        "W",
        "F",
        "W",
        "SF",
        "W"])