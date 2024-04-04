function maxNum(input){
    let index = 0;
    let num = Number (input[index]);
    let maxNum = -9999;
    
    while (num != "Stop") {
        if (num > maxNum) {
            num = Number (input[index]);
            maxNum = num;
        }
        index ++;
        num = (input[index]);
    }
    console.log(maxNum)
}
maxNum(["-45",
"-20",
"-7","-99","Stop"])