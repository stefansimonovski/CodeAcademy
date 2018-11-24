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


function acceptNumb(){
    var num1 = prompt("Vnesi broj");
    var num2 = prompt("vnesi vtor broj");
    var brm0 = 0;
    var brm1 = 1;
    var brm2 = 2;

    var digit0 = ~~(num1/Math.pow(10, brm0)) - ~~(num1/Math.pow(10, brm0 + 1)) * 10;
    var digit1 = ~~(num1/Math.pow(10, brm1)) - ~~(num1/Math.pow(10, brm1 + 1)) * 10;
    var digit2 = ~~(num1/Math.pow(10, brm2)) - ~~(num1/Math.pow(10, brm2 + 1)) * 10;

    var vrm0 = 0;
    var vrm1 = 1;
    var vrm2 = 2;

    var mdigit0 = ~~(num2/Math.pow(10, vrm0)) - ~~(num2/Math.pow(10, vrm0 + 1)) * 10;
    var mdigit1 = ~~(num2/Math.pow(10, vrm1)) - ~~(num2/Math.pow(10, vrm1 + 1)) * 10;
    var mdigit2 = ~~(num2/Math.pow(10, vrm2)) - ~~(num2/Math.pow(10, vrm2 + 1)) * 10;


        if (digit0 != mdigit0 && digit0 != mdigit1 && digit0 != mdigit2 && digit1 != mdigit0 && digit1 != mdigit1 && digit1 != mdigit2 && digit2 != mdigit0 && digit2 != mdigit1 && digit2 != mdigit2) {
                num1++;
                alert(num1);
        }else{
            alert("The numbers are same")
        }
        
    }
acceptNumb();
