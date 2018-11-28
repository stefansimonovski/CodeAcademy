// function feedCats(){
//     for (var i = 0; i < 7; i++) {
//         catEat();
//     }
// }

// function catEat(){
//     var cats = ["Tabby", "Lizzie", "Mary"];

//     for(var i = 0; i <cats.length; i++){
//         if(cats[i] === "Tabby"){
//         console.log(cats[i] + " started eating fish");
//         }else if(cats[i] === "Lizzie"){
//         console.log(cats[i] + " started eating chicken");
//         }else if(cats[i] === "Mary"){
//         console.log(cats[i] + " started eating whatever");
//         }
//     }
// }

// feedCats();


// function paramedic(){
    
//     var number = 60;
    
//     for(var i = 0; i < number; i++){
        
//         if(i % 15 == 0){
//             console.log("Check the pulse");
//         }else if(i == number - 1){
//             console.log("Check the pulse and declare is he alive or dead");
//         }else{
//             console.log("Performing massage");
//         }
//     }
// }

// paramedic();

// function checkIfPalindrome(){
//     for (var i = 100; i < 999; i++) {
//         if(compareDigits(i) == i){
//             console.log("The number " + i +" is palindrome");
//         }
//     }
// }
// function compareDigits(index){
//     var digit = 0;
//     var sum = 0;
//     while(index){
//         digit = index % 10;
//         index = Math.floor(index / 10);
//         if(digit >= 0){
//             sum = (sum * 10) + digit;
//         }else{
//             break;
//         }
//     }return sum;
// }

// checkIfPalindrome();

// function howMuchFuel(){
//     var uses = 7 / 100;
//     var drive = 0;
//     for (var index = 1; index <= 100; index++) {
//         if(index == 43){
//             drive = index * uses;
//             console.log("Car uses " + drive.toFixed(2) + " liters of fuel at a distance of " + index + " kilometers");
//         }
//     }
// }   

// howMuchFuel();

// function flirt(triesnum, boyhitpoint){

//     if(girlTries(triesnum) > boyhitpoint){
//         console.log("With " + triesnum + " tries by Girl and with " + boyhitpoint + " healt by boy the Girls wins");
//     }else{
//         console.log("With " + triesnum + " tries by Girl and with " + boyhitpoint + " healt by boy the Boy wins");
//     }
// }

// function girlTries(triesnum){
//   var girlpoints = 0;
//     for(var i = 1; i <= triesnum; i++){
//         if(i % 10 === 0){
//             girlpoints -= 12;
//         }else if(i % 5 === 0){
//             girlpoints += 10;
//         }else if(i % 3 === 0){
//             girlpoints += 5;
//         }else{
//             girlpoints++;
//         }
//     }
//     return girlpoints;
// }

// flirt(10, 20);

function fight(){
    var orc = 480;
    var human = 550;
    var orcarmor = 5;
    var humanarmor = 9;
    while(orc > 0 && human > 0){
        for(var i = 0; i < 1; i++){
            orc = orc - (Math.floor(Math.random()*(27-18+1)+18) - orcarmor);
            human = human - (Math.floor(Math.random()*(35-23+1)+23) - humanarmor);
            if(orc < 0){
                console.log("Human Win");
            }else if(human < 0){
                console.log("Orc Win");
            }
        }
    }
}


fight();
