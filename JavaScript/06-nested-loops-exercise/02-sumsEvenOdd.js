function sumEvenOdd(input){
    let firstNum = Number(input[0])
    let secondNum = Number(input[1])
    let result = "";

    for (let i = firstNum; i <= secondNum; i++) {
        let currEvenSum = 0
        let currOddSum = 0
        i.toString().split("").map(Number).forEach((x, index) =>
            index % 2 === 0 ? currEvenSum += x : currOddSum += x)
        if (currEvenSum === currOddSum) result += " " + i
    }
    console.log(result.trim())
}
   sumEvenOdd(["100000","100050"])