function sumOfTwoNum(input){
    let sum = 0;
    let count = 0;
    let start = Number (input[0]);
    let end = Number (input[1]);
    let magicN = Number(input[2]);
    let i = 0;
    let j = 0;

    for (  i = start; i <= end; i++) {
      for ( j = start; j <= end; j++) {
        count ++;
        if (i + j === magicN) {
            sum = i+j;
            break;
        }
      }
        if (i + j === sum){
            console.log(`Combination N:${count} (${i} + ${j} = ${sum})`);
            return;
        } 
    }
    console.log(`${count} combinations - neither equals ${magicN}`)
}
sumOfTwoNum(["88",
"888",
"1000"])