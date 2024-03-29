function trekking(input){
    let groupNumbers = Number(input[0]);
    let mus = 0;
    let mon = 0;
    let kilim = 0;
    let k2 = 0;
    let everest = 0;
    let allPeople = 0;

    for (let i = 1; i <= groupNumbers; i++) {
        let peopleInGroup = Number(input[i]);
        
        if (peopleInGroup <= 5){
            mus += peopleInGroup;
        } else if (peopleInGroup > 5 && peopleInGroup <= 12){
            mon += peopleInGroup;
        } else if (peopleInGroup > 12 && peopleInGroup <= 25){
            kilim += peopleInGroup;
        } else if (peopleInGroup > 25 && peopleInGroup <= 40){
            k2 += peopleInGroup;
        } else if (peopleInGroup >= 41){
            everest += peopleInGroup;
        }
    }
    allPeople = mus + mon + kilim + k2 + everest;

    mus = (mus / allPeople) * 100;
    mon = (mon / allPeople) * 100;
    kilim = (kilim / allPeople) * 100;
    k2 = (k2 / allPeople) * 100;
    everest = (everest / allPeople) * 100;

    console.log(`${mus.toFixed(2)}%`);
    console.log(`${mon.toFixed(2)}%`);
    console.log(`${kilim.toFixed(2)}%`);
    console.log(`${k2.toFixed(2)}%`);
    console.log(`${everest.toFixed(2)}%`);
}
trekking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])