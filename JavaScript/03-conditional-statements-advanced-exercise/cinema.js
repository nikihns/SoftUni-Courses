function cinema(input){
    let projects = input[0];
    let row = Number(input[1]);
    let column = Number(input[2]);
    let total = 0;
    switch(projects){
        case "Premiere":
            total = (row*column) * 12;
        break;
        case "Normal":
            total = (row*column) * 7.5;
        break;
        case "Discount":
            total = (row*column) * 5;
        break;
    }
    console.log(`${total.toFixed(2)} leva`)
}