function petShop(input){
    let numDogFood = Number(input[0]);
    let numCatFood = Number(input[1]);

    numDogFood = numDogFood * 2.5;
    numCatFood = numCatFood * 4;
    let total = numDogFood + numCatFood;

    console.log(`${total} lv.`)
}
petShop("5","4")