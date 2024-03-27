function histogram(input){
    let num = Number(input[0]);
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;

    for (i = 1; i <= num; i ++){
        let numb = Number(input[i]);
        
        if(numb < 200){
            n1 += 1;
        } else if(numb >= 200 & numb <= 399){
            n2 += 1;
        } else if(numb >= 400 & numb <= 599){
            n3 += 1;
        } else if(numb >= 600 & numb <= 799){
            n4 += 1;
        } else if(numb >= 800){
            n5 += 1;
        } 
    }
    
    n1 = (n1 / num) * 100;
    n2 = (n2 / num) * 100;
    n3 = (n3 / num) * 100;
    n4 = (n4 / num) * 100;
    n5 = (n5 / num) * 100;
    
    console.log(`${n1.toFixed(2)}%`);
    console.log(`${n2.toFixed(2)}%`);
    console.log(`${n3.toFixed(2)}%`);
    console.log(`${n4.toFixed(2)}%`);
    console.log(`${n5.toFixed(2)}%`);
    
}
histogram(["3","1","2","999"]);