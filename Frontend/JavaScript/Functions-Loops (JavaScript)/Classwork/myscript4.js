// function feedCats(){
//     var cats = ["Tabby", "Lizzie", "Mary"];
//     for (var i = 0; i < 7; i++) {
//         for (var j = 0; j < cats.length; j++)
//         if(cats[j] === "Tabby"){
//            console.log(cats[j] + " fish");
//         }else if(cats[j] === "Lizzie"){
//             console.log(cats[j] + " chicken");
//         }else if(cats[j] === "Mary"){
//             console.log(cats[j] + " whatever");
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
//     var num1 = checkNumber(index);
//     var num2 = 0;
//         while(num1){
//             num1 = index % 10;
//             index = Math.floor(index / 10);
//             num2 = num1 * 10 + num1;
//             if(num2 == num1){
//                 console.log("the number " + num1 + " is palindrome");
//             }
//         }
// }
// function checkNumber(index){
//     for(var index = 1; index < 100; index++){
//         return index;
//     }    
// }

// checkIfPalindrome();

// function flirt(triesnum, boyhitpoint){
//     var girlpoints = 0;

//     for(var i = 1; i <= triesnum; i++){
//         if(i % 10 === 0){
//             girlpoints = girlpoints - 12;
//         }else if(i % 5 === 0){
//             girlpoints += 10;
//         }else if(i % 3 === 0){
//             girlpoints++;
//         }
//     }
//     if(girlpoints >= boyhitpoint){
//         console.log("Girl wins");
//     }else{
//         console.log("Boy Win");
//     }
// }

// flirt(15, 10);

// function fight(){
//     var orc = 480;
//     var human = 550;
//     var orcarmor = 5;
//     var humanarmor = 9;
//     while(orc || human){
//         for(var i = 0; i < 1; i++){
//             orc = orc - (Math.floor(Math.random()*(27-18+1)+18) - orcarmor);
//             human = human - (Math.floor(Math.random()*(35-23+1)+23) - humanarmor);
//             if(orc < 0){
//                 console.log("Human Win");
//                 return;
//             }else if(human < 0){
//                 console.log("Orc Win");
//                 return;
//             }
//         }
//     }
// }
// fight();



