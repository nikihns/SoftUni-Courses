function fishTank(input){
    let l = Number(input[0]);
    let w = Number(input[1]);
    let h = Number(input[2]);
    let percentage = Number(input[3]);

    let cubicCM = l * w * h;

    let cubicM = cubicCM / 1000;

    let totalSpace = cubicM * (1-(percentage / 100));
    console.log(totalSpace)
}   
    fishTank(["85","75","47","17"])