function minNum(input){
    let index = 0;
    let num = Number (input[index]);
    let minNum = 9999;
    
    while (num != "Stop") {
        if (num < minNum) {
            num = Number (input[index]);
            minNum = num;
        }
        index ++;
        num = (input[index]);
    }
    console.log(minNum)
}
minNum(["-10",
"20",
"-30",
"Stop"])