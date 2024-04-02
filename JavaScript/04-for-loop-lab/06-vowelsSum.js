function vowel (input){
    let text = input[0];
    let a = 1;
    let e = 2;
    let i = 3;
    let o = 4;
    let u = 5;
    let sum = 0;

    for (let j = 0; j <= text.length-1; j++) {
        let letter = text[j];
        switch(letter){
            case "a":
                sum +=a;
                break;
            case "e":
                sum +=e;
                break;
            case "i":
                sum +=i;
                break;
            case "o":
                sum +=o;
                break;
            case "u":
                sum +=u;
                break;
        }
    }
    console.log(sum);
}
vowel(["bamboo"])