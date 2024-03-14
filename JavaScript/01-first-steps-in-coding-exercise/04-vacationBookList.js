function vacationBookList(input){
    let numSheets = Number(input[0]);
    let sheetsForOneHour = Number(input[1]);
    let daysForRead = Number(input[2]);

    let hoursToReadTheBook = numSheets / sheetsForOneHour;
    let hoursPerDay = hoursToReadTheBook / daysForRead;

    console.log(hoursPerDay)
}
    vacationBookList(["432","15","4"])