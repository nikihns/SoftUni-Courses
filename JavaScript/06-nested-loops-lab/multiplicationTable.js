function mul(input){
    let sum = 0;
    for (let m = 0; m <= 10; m++) {
       for (let d = 0; d <= 10; d++) {
            sum = m * d;
        console.log(`${m} * ${d} = ${sum}`)
       }
    }
}
mul([])