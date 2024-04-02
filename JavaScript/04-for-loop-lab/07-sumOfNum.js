function sumOfNum(input){
    function sumOfNum (input){
    let num = input[0];
    let sum = 0;

    for (let i = 0; i <=num.length-1; i++) {
        let n = parseInt(num[i]);
        sum += parseInt(n);
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNum(["1234"]);


}