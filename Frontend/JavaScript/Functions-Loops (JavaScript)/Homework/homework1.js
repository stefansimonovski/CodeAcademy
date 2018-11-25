function concatenateStrings(x, y, boolean){
    var result;
    if(boolean == true){
        result = x + y;
    }else{
        result = y + x;
    }
    console.log(result);
}

concatenateStrings("fizz", "buzz", 0);

function calculateTax(salary, craftsman){
    var tax1;
    var tax2;
    var totaltax;
    if (salary <= 1000 && craftsman) {
        tax1 = salary * 5 / 100;
        totaltax = tax1;
        console.log("For your salary of " + salary + " you will pay " + totaltax) ;
    }else if(salary > 1000 && craftsman){
        tax1 = 1000 * 5 / 100;
        tax2 = (salary - 1000) * 10 / 100;
        totaltax = tax1 + tax2;
        console.log("For your salary of " + salary + " you will pay " + totaltax);
    }else if(salary <= 1000){
        tax1 = salary * 11 / 100;
        totaltax = tax1;
        console.log("For your salary of " + salary + " you will pay " + totaltax);
    }else if(salary > 1000){
        tax1 = salary * 11 / 100;
        tax2 = (salary - 1000) * 18 / 100;
        totaltax = tax1 + tax2;
        console.log("For your salary of " + salary + " you will pay "+ totaltax);
    }else{
        console.log("Wrong Input");
    }
}

calculateTax(2000, 0);