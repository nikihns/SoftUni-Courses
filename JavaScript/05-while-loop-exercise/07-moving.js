function moving(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let heigth = Number(input[2]);
    let index = 3;
    let totalSpace = width * length * heigth;
    let box = input[index];
    let diff = 0;
    let occupiedSpace = 0;

    while (box !== "Done" && occupiedSpace < totalSpace) {
        box = Number (input[index]);
        occupiedSpace += box;
        index++;
        box = (input[index]);
    }
        diff = totalSpace - occupiedSpace;
        let d = Math.abs(diff);
    if (box == "Done") {
        console.log(`${d} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${d} Cubic meters more.`)
    }
   
}
moving(["10", 
"10",
"2",
"40",
"20",
"20",
"20",
"100"])