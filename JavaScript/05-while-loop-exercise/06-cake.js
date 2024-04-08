function cake(input){
   let length = Number(input[0]);
   let width = Number(input[1]);
   let pieces = length * width;
   let index = 2;
   let diff = 0;
   let takenPieces = "";

   while (pieces > 0) {
    takenPieces = input[index];

    if (pieces < 0 || takenPieces === "STOP") {
        diff = Math.abs(pieces);
        console.log(`${diff} pieces are left.`);
        return;
    } else {
        takenPieces = Number(input[index]);
        pieces -= takenPieces;  
 
        }
    index ++;
   }
   let p = Math.abs(pieces);
   console.log(`No more cake left! You need ${p} pieces more.`);  
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])