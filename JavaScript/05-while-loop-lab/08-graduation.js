function graduation(input){
    let name = input[0];
    let n = 1;
    let score = Number(input[n]);
    let averageScore = 0;
    let total = 0;
    let count = 0;
    let kicked = 0;
    
    while (n <= 12) {
        score = Number(input[n]);
       
        if (score < 4) {
            kicked += 1;
            if (kicked >= 2) {
                console.log(`${name} has been excluded at ${count} grade`);
                return;
            }
        }
        total += score;
        count += 1;
        n ++;
    }
    averageScore = total / count;
    console.log(`${name} graduated. Average grade: ${averageScore.toFixed(2)}`);
}
 graduation(["Gosho", 
 "5",
 "5.5",
 "6",
 "5.43",
 "5.5",
 "6",
 "5.55",
 "5",
 "6",
 "6",
 "5.43",
 "5"])