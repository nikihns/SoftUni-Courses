function salary(input){
    let numTabs = Number(input[0]);
    let salary = Number(input[1]);

    for (i=2; i<=numTabs + 2; i++){
        let typeOfTabs = input[i];
        switch(typeOfTabs){
             case "Facebook":
                salary -= 150;
             break;
             case "Instagram":  
                salary -= 100;
             break;
             case "Reddit":
                salary -= 50;
             break;       
        }  
        
    }
            if (salary <= 0){
                 console.log("You have lost your salary.");
                return;
                 } else
                console.log(salary);
  
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])