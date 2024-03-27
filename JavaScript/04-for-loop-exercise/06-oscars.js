function oscars(input){
    let name = input[0];
    let score = Number(input[1]);
    let num = Number(input[2]);
   
    let neededScore = 0;
    let nameIndex = 3;
    let scoreIndex = 4;
    for (i = 0; i <= num; i ++){
        let jury = input[nameIndex];
        let givenScore = input[scoreIndex];
        
        if (!jury || !givenScore){
            break;
        }
        score = score + (jury.length*givenScore)/2;
        if (score >=1250.5) {
            break;
        }
        nameIndex +=2;
        scoreIndex +=2;
    }
    neededScore = 1250.5 - score;
    if (score >=1250.5) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${score}!`);
    } else
        console.log(`Sorry, ${name} you need ${neededScore} more!`);
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])