function exam (input){
    let limit = Number(input[0]);
    let index = 1;
    let indexS = 2;
    let name = input[index];
    let grade = Number (input[indexS]);
    let goodGrade = 0;
    let badGrade = 0;
    let sumGrade = 0;
    let averageGrade = 0;
    count = 0;
    let lastTask = "";

    while ( badGrade < limit) {
      name = input[index];
      grade = Number(input[indexS]);
        if (name === "Enough"){
            console.log(`Average score: ${averageGrade.toFixed(2)}`);
            console.log(`Number of problems: ${count}`);
            console.log(`Last problem: ${lastTask}`);
            break;
        }
        lastTask = "";
      
        if (grade <= 4) {
            badGrade ++;
        }
        lastTask += name;
       
      sumGrade +=grade;
      count++;
      averageGrade = sumGrade / count;
      
        
      index+=2;
    
      indexS+=2;
    }
    if (badGrade >= limit) {
        console.log(`You need a break, ${badGrade} poor grades.`)
    }
}
exam(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])