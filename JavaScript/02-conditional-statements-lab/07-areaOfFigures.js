function areaOfFigures(input){
    let figure = input[0];
    if ( figure == "square"){
        let num = input[1];
        console.log( num * num);
    } else if ( figure == "rectangle"){
        let a = input[1];
        let b = input[2];
        console.log(a*b);
    } else if ( figure == "circle"){
        let r = input[1];
        console.log( Math.PI * r * r);
    } else if ( figure == "triangle" ){
        let a = input[1];
        let h = input[2];
        console.log( (a * h) / 2);
    }
}
areaOfFigures(["circle","6"])