function oldBooks(input){
    let wantedBook = input[0];
    let index = 1;
    let checkBook = input[index];
    let count = 0;

    while (checkBook !== wantedBook && checkBook !== "No More Books") {
        checkBook = input[index];
        index ++;
        count ++;
    } 
    if (index === 1) {
        count ++;
    }

    if (checkBook === wantedBook) {
        console.log(`You checked ${count-1} books and found it.`)
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${count -1} books.`);
    }
}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])