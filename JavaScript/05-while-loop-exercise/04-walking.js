function walking(input){
    let index = 0;
    let steps = input[index];
    let allSteps = 0;
    let diff = 0;


    while (allSteps < 10_000) {
        steps = input[index];
        if (steps == "Going home"){
            steps = Number (input[index +1]);
            allSteps += steps;
            diff = Math.abs(10_000 - allSteps);
           if ( allSteps > 10_000) {
                console.log(`Goal reached! Good job!`)
                console.log(`${diff} steps over the goal!`);
                return;
           } else {
                console.log(`${diff} more steps to reach goal.`);
                return;
           }
        } else {
            steps = Number (input[index]);
        }
       // steps = Number (input[index]);
        allSteps += steps;
        index++;
    }
    diff = allSteps - 10_000
    console.log(`Goal reached! Good job!`)
    console.log(`${diff} steps over the goal!`)
}
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])
