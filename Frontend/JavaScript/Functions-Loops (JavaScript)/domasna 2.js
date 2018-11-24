// function sobirajBrojki(){
//     var vrednost = prompt("Vnesi broj");
//     var zbir = 0;

//     while (vrednost) {
//         zbir += vrednost % 10;
//         vrednost = Math.floor(vrednost / 10);
//     }
//     alert(zbir);

// }
// sobirajBrojki();


function compareDigits(num1, num2) {

    var digit1 = 0;
    var digit2 = 0;
    var indicator;

    while (num1 && num2) {                             //ako edniot e pogolem ke prekine kaj krajot na pomaliot, zatoa se dvata

        digit1 = num1 % 10;
        num1 = Math.floor(num1 / 10);
      
        digit2 = num2 % 10;
        num2 = Math.floor(num2 / 10);
       
        if (digit1 == digit2) {

            indicator = true;
            break;
        }

        else { indicator = false; }

    }
    // console.log("The comparison is " + indicator);   //pokazuva kolku true ima pred false, moze da se vidi kolku broevi prosle
    return indicator;
}


function differentNext(n, x) {

    var pom1 = n + 1;                                   // so n++ go zgolemuva "n" opsto, a go koristam i vo konsole log dole, vaka so +1 ne go zgolemuva.
    var pom2 = x;
    
    while (true) {

        if(compareDigits(pom1,pom2)){

        pom1++;
         
        }

        else { break; }
    }

    console.log("Najbliskiot pogolem broj od " + n + " koj e celosno razlicen od brojot " + x + " e brojot " + pom1);

}

differentNext(350,390);
