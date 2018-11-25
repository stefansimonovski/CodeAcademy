function howMuchMoney(){
    var promptresult = prompt("How much money do you have?");
        if (promptresult < 1000){
            console.log("slabo");
        } else if(promptresult <= 5000){
            console.log("solidno");
        } else if(promptresult > 5000){
            console.log("odlicno");
        }
}
howMuchMoney();

function maxofThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1);
    }else if(num2 > num1 && num2 > num3){
        console.log(num2);
    }else if(num3 > num1 && num3 > num2){
        console.log(num3);
    }
}

maxofThree(3, 5, 9);

function registering(bhp){
    var technicalexam = 5000;
    var cost = 0;
    if(bhp <= 85){
        cost = technicalexam + 3000;
        console.log("For vehicle under 85bhp registering is " + cost);
    }else if (bhp > 85 && bhp <= 150){
        cost = technicalexam + 5000;
        console.log("For vehicle over 85bhp and under 150bhp registering is " + cost);
    }else if (bhp > 150){
        cost = technicalexam + 15000;
        console.log("For vehicle over 150bh registering is " + cost);
    }
}

registering(90);

function getBiggest(){
    var pogolem = 0;
    var brojac = 0;

    while (brojac < 10) {
        var random = getRandomInt(1, 11);
       
        if (random > pogolem) {
            pogolem = random;
        }
    brojac++;
    }
    console.log(pogolem);
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

getBiggest();

function sumofSquares(){
    var result = 0;
    for (var index = 101; index < 151; index++) {
        result += Math.pow(index, 2);
    } 
    console.log(result);
}
sumofSquares();