function sobirajBrojki(){
    var vrednost = prompt("Vnesi broj");
    var zbir = 0;

    while (vrednost) {
        zbir += vrednost % 10;
        vrednost = Math.floor(vrednost / 10);
    }
    alert(zbir);

}
sobirajBrojki();


function compareDigits(num1, num2) {
    var digit1 = 0;
    var digit2 = 0;
    var indicator;

    while (num1 && num2) {
        digit1 = num1 % 10;
        num1 = Math.floor(num1 / 10);
      
        digit2 = num2 % 10;
        num2 = Math.floor(num2 / 10);
       
            if (digit1 == digit2) {
                indicator = true;
                break;
            }else { 
            indicator = false;
            }
    }
    return indicator;
}

function differentNumber(n, x) {
    var pom1 = n + 1;                                  
    var pom2 = x;
    
    while (true) {
        if(compareDigits(pom1,pom2)){
            pom1++;
        }else {
            break;
        }
    }
    console.log("Najbliskiot pogolem broj od " + n + " koj e celosno razlicen od brojot " + x + " e brojot " + pom1);
}

differentNumber(450,490);
