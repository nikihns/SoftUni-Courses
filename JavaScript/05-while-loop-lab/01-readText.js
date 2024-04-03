function readText(input){
 
        for (let i = 0; i <= 2222222 ; i++){
         let text = input[i];
         if (text === "Stop"){
            return;
         }
         console.log(text);
        }
}
 
readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])