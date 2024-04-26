function grandpaStavri(input){
    let index = 1;
    let index2 = 2;
    let days = Number(input[0]);
    let totalRakia = 0;
    let totalDegrees = 0;

    for (let i = 1; i <= days; i++) {
       let rakia = Number(input[index]);
       let degrees = Number(input[index2]);
       totalRakia = totalRakia + rakia;
       totalDegrees = totalDegrees + (rakia * degrees);
       index +=2;
       index2 +=2
    }
    totalDegrees = totalDegrees / totalRakia;
    if (totalDegrees < 38) {
        console.log(`Liter: ${totalRakia.toFixed(2)}`);
        console.log(`Degrees: ${totalDegrees.toFixed(2)}`);
        console.log(`Not good, you should baking!`);
    } else if (totalDegrees >= 38 && totalDegrees <= 42) {
        console.log(`Liter: ${totalRakia.toFixed(2)}`);
        console.log(`Degrees: ${totalDegrees.toFixed(2)}`);
        console.log(`Super!`);
    } else if (totalDegrees > 42) {
        console.log(`Liter: ${totalRakia.toFixed(2)}`);
        console.log(`Degrees: ${totalDegrees.toFixed(2)}`);
        console.log(`Dilution with distilled water!`);
    }
}
grandpaStavri(["3","100","45","50","55","150","36"]);