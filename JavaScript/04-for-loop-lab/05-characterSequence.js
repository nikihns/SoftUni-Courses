function characterSequence (input){
   let text = input[0];
   for (let i = 0; i <= text.length-1; i++) {
        let letter = text[i];
        console.log(letter);
   } 
}
characterSequence(["hello"])