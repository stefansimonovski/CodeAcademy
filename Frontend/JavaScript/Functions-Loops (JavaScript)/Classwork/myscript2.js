var promptresult = prompt("How much money do you have?");


function maxOfThree(promptresult){
    if (promptresult > 1000){
        console.log("slabo");
    } else if(promptresult > 5000){
        console.log("solidno");
    } else if(promptresult > 10000){
        console.log("odlicno");
    }
}
maxOfThree();

function getBiggest(){
    var pogolem = 0;
    var brojac = 0;

    while (brojac < 10) {
        var random = Math.random();
       
        if (random > pogolem) {
            pogolem = random;
        }
    brojac++;
    }
    console.log(pogolem);
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